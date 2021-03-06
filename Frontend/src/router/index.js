import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUpForm from '../components/SignUpForm.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/signup',
        name: 'Signup',
        component: SignUpForm
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },

    {
        path: '/hovedkategorier',
        name: 'hovedkategoriContainer',
        component: () =>
            import(
                /* webpackChunkName: "hovedkategoriContainer" */ '../views/HovedkategoriContainer.vue'
            ),
    },
    {
        path: '/hovedkategorier/emne/',
        name: 'EmnerContainer',
        component: () =>
            import(
                /* webpackChunkName: "hovedkategoriContainer" */ '../views/EmnerContainer.vue'
            ),
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
