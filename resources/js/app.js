
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import VueRouter from 'vue-router';

// Pages
import Welcome from './pages/Welcome';
import Resources from './pages/Resources';


window.Vue = require('vue');

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Welcome
    }, {
        path: '/resources',
        component: Resources
    }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    console.log(to.path);
    next();
});

const app = new Vue({
    el: '#app',
    router
});
