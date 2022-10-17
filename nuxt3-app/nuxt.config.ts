// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    builder: 'vite', // 构建方式可选webpack，注释则默认是vite
    alias: {
        "assets": "/<rootDir>/assets",
        "public": "/<rootDir>/public"
    },
    analyze: true // 打包分析
})
