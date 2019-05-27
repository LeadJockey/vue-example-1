import MainView from '@/views/MainView.vue'

const routes = {
  mode: 'history',
  routes: [
    { path: '/', name: 'main', component: MainView },
    { path: '/temp', name: 'temp', component: MainView },
    { path: '/temp/1', name: 'temp1', component: MainView },
    { path: '/temp/2', name: 'temp2', component: MainView },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior: () => ({ y: 0 }) // scroll top
}

export default routes
