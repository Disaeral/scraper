import type webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'
import path from 'path'

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        scssMixins: path.resolve(__dirname, 'src', 'app', 'styles', 'variables'),
        images: path.resolve(__dirname, 'src', 'shared', 'assets', 'images')
    }

    const mode = env.mode ?? 'development'
    const PORT = env.port ?? 3000
    const isDev = mode === 'development'

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })
    return config
}
