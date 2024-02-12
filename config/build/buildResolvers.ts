import { type BuildOptions } from './types/config'
import type webpack from 'webpack'
import path from 'path'

export function buildResolvers (options: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [
            options.paths.src, 'node_modules'
        ],
        alias: {
            images: options.paths.images
        },
        mainFiles: ['index']
    }
}
