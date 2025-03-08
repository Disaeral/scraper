import type { UserConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

export default {
    build: {
        outDir: 'build'
    },
    plugins: [
        react(),
        svgr()
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use "app/styles/variables/global" as *;
                    @use "app/styles/variables/mixins" as *;
                    @use "app/styles/themes/dark" as *;
                    @use "app/styles/themes/normal" as *;
                    @use "app/styles/reset" as *;
                `,
                includePaths: [path.resolve(__dirname, 'src', 'app', 'styles', 'variables')]
            }
        }
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
        alias: {
            app: path.resolve(__dirname, './src/app'),
            widgets: path.resolve(__dirname, './src/widgets'),
            shared: path.resolve(__dirname, './src/shared'),
            pages: path.resolve(__dirname, './src/pages'),
            features: path.resolve(__dirname, './src/features')
        }
    }
} satisfies UserConfig
