// 1. 安装 grunt-sass sass --dev
const sass = require('sass')

module.exports = grunt => {
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true,
                implementation: sass
            },
            main: {
                files: {
                    'dist/assets/styles/main.css': 'src/assets/styles/main.scss'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-sass') // 载入grunt 任务
}