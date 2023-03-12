import { defineConfig } from 'vite'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@pages': path.resolve(__dirname, './src/pages'),
			'@components': path.resolve(__dirname, './src/components'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@services': path.resolve(__dirname, './src/services'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@interfaces': path.resolve(__dirname, './src/interfaces'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@store': path.resolve(__dirname, './src/store')
		},
	},
})
