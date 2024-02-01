import { type BuildOptions } from './types/config'
import type webpack from 'webpack'
import { buildPlugin } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
    const {
        paths, mode, isDev
    } = options

    return {
        devtool: isDev ? 'inline-source-map' : undefined,
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugin(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devServer: isDev ? buildDevServer(options) : undefined
    }
}
