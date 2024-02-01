import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
    const typescript = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack']

    }

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en', 'jp'],
                            outputPath: 'locales/{{locale}}/{{ns}}.json'
                            // keyAsDefaultValue: true,
                        }
                    ]
                    // […] your other plugins […]
                ]
            }
        }
    }

    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',

                options: {
                    modules: {
                        mode: 'local',
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDev
                            ? '[path][name]__[local]'
                            : '[hash:base64:8]'
                    }
                }
            },
            // Compiles Sass to CSS
            'sass-loader'
        ]
    }
    return [babelLoader, typescript, cssLoaders, svgLoader]
}
