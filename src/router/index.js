import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello.vue'
import Sample from 'components/Sample.vue'
import DashboardV1 from 'layouts/Dashboard.v1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/sample',
      name: 'Sample',
      component: Sample
    },
    {
      path: '/dashboard/v1',
      name: 'DashboardV1',
      component: DashboardV1
    }
  ],
  linkActiveClass: 'active'
})
