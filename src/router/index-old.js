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
            path: '/', 
            name: 'home', 
      
            component: __import__('home'),
			beforeEnter: authenticationGuard,
        },

    ]
})

router.afterEach((to) => {

    document.title = to.meta.title
})

export default router
