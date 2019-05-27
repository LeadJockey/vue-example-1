import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/routes'

Vue.use(Router)

const router = new Router(routes)

router.beforeEach((to, form, next) => {
  next()
})

router.afterEach((to, from) => {})

export default router
