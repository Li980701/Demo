import Vue from 'vue'
import Router from 'vue-router'
import register from '../components/layout/register'
import calendar from '../components/layout/calendar'
import registerpage from '../components/layout/registerpage'
import annultable from '../components/tool/IBMannulaEarnings'
import quarttable from '../components/tool/IBMquaterlyEarnings'

Vue.use(Router)

const routes = [
    {
        path: '/register',
        component: register,
    },
    {
        path: '/calendar',
        component: calendar,
    },
    {
        path: "/registerpage",
        component: registerpage,
    },
    {
        path: '/annultable',
        component: annultable
    },
    {
        path: '/quarttable',
        component: quarttable
    },

]

const rou = new Router({
    routes
})

export default rou
