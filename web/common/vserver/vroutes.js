import Vue from 'vue';
import Router from 'vue-router';
import Home from '../../home/components/app.vue';
import About from '../../about/components/about.vue';

Vue.use(Router);
export default () => {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/about',
                name: 'about',
                component: About
            }
        ]
    });
};
