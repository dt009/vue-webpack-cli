/*
 * @Author: duantao-ds
 * @Date: 2018-08-09 16:17:25
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-09 17:11:01
 */

import Vue from 'vue';
import Router from 'vue-router';

import Home from 'comp/Home';
import About from 'comp/About';
import About_Home from 'comp/About_Home';
import About_Message from 'comp/About_Message';

Vue.use(Router);

const router =  new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About,
            children: [
                {
                    path: 'home',
                    name: 'About_Home',
                    component: About_Home
                },
                {
                    path: 'message',
                    name: 'About_Message',
                    component: About_Message
                }
            ]
        }
    ]
})

// 通过导航守卫可以设置默认路由
// router.beforeEach((to, from, next) => {
//     if (to.name === 'About') {
//         next('/about/home')
//     }
//     else {
//         next()
//     }
// })

export default router;
