// 导入Vue及vue-router
import Vue from 'vue'
import Router from 'vue-router'
import { authenticationGuard } from '@/auth/authenticationGuard';

Vue.use(Router)



const __import__ = file => () => import(`@/pages/${file}.vue`)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/home', 
            name: 'home', 
      
            component: __import__('home'),
			beforeEnter: authenticationGuard,
        },
        {
            path: '/shop', // 这是配置的路径 / 表示根目录，你可以配置/abcd来测试效果
            name: 'shop', // 指定一个路由的名字可以省很多事，当然这是可选项
            // 在这里添加导入的组件
            component: __import__('shop'),
        },
        {
            path: '/', // 这是配置的路径 / 表示根目录，你可以配置/abcd来测试效果
            name: 'index', // 指定一个路由的名字可以省很多事，当然这是可选项
            // 在这里添加导入的组件
            component: __import__('index'),
        },
        {
            path: '/team', // 这是配置的路径 / 表示根目录，你可以配置/abcd来测试效果
            name: 'team', // 指定一个路由的名字可以省很多事，当然这是可选项
            // 在这里添加导入的组件
            component: __import__('team'),
        },
    ]
})

router.afterEach((to) => {

    document.title = to.meta.title
})

export default router
