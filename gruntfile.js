// 1. 安装 grunt-sass sass --dev 编译 *.scss 文件
// 2.yarn add --dev grunt-babel @babel/core @babel/preset-env 编译js es6 语法文件
// 3.yarn add load-grunt-tasks --dev  // 减少loadNpmTasks 的使用
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
                    'dist/assets/styles/main.css': 'src/assets/styles/main.scss'
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
        }
    })

    // grunt.loadNpmTasks('grunt-sass') // 载入grunt 任务
    loadGruntTasks(grunt) // 自动加载所有的 grunt 插件中的任务
}