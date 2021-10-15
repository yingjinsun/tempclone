// 导入Vue及vue-router
import Vue from 'vue'
import Router from 'vue-router'

// 这是Vue中使用插件的固定模式，
// 我们之后还会与他见面。
Vue.use(Router)

// 导入这个路由下使用的组件
// 我们还没有写首页，就用Vue的欢迎界面吧。
// @ 指向的目录是 src.

const __import__ = file => () => import(`@/pages/${file}.vue`)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/', // 这是配置的路径 / 表示根目录，你可以配置/abcd来测试效果
            name: 'home', // 指定一个路由的名字可以省很多事，当然这是可选项
            // 在这里添加导入的组件
            component: __import__('home'),


        }
    ]
})

router.afterEach((to) => {

    document.title = to.meta.title
})

export default router
