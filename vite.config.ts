import { resolve } from 'path'
export default {
    // base: '/y/',
    server: {
        port: 2555, // Здесь указываете нужный порт
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve('index.html'),
            }
        }
    }
}