// 1. 安装 grunt-sass sass --dev 编译 *.scss 文件
// 2.yarn add --dev grunt-babel @babel/core @babel/preset-env 编译js es6 语法文件
// 3.yarn add load-grunt-tasks --dev  // 减少loadNpmTasks 的使用
// 4.yarn add grunt-contrib-watch --dev  //每当添加，更改或删除监视的文件模式时，运行预定义的任务
const sass = require('sass')
const loadGruntTasks = require('load-grunt-tasks')

module.exports = grunt => {
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true,
                implementation: sass
            },
            main: {
                files: {
                    'dist/assets/styles/main.css': 'src/assets/styles/*.scss'
                }
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            main: {
                files: {
                    'dist/assets/scripts/main.js': 'src/assets/scripts/main.js'
                }
            }
        },
        watch: { // 监听文件变化
            js: {
                files:['src/assets/scripts/*.js'],
                tasks: ['babel']
            },
            css: {
                files:['src/assets/styles/*.scss'],
                tasks: ['sass']
            }

        }
    })

    // grunt.loadNpmTasks('grunt-sass') // 载入grunt 任务
    loadGruntTasks(grunt) // 自动加载所有的 grunt 插件中的任务

    // 给多个任务做映射
    grunt.registerTask('default', ['sass', 'babel', 'watch'])
}