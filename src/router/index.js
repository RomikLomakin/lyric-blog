import Vue from 'vue'
import Router from 'vue-router'
import MainVue from '../components/MainVue'
import CaseVue from '../components/CaseVue'
import NewsVue from '../components/NewsVue'
import OtherVue from '../components/OtherVue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainVue
    },
    {
      path: '/case',
      name: 'case',
      component: CaseVue
    },
    {
      path: '/news',
      name: 'news',
      component: NewsVue
    },
    {
      path: '/other',
      name: 'other',
      component: OtherVue
    }
  ],
  mode: 'history'
})
