import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';
import RouteView from '@/components/RouteView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    hidden: true,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Layout,
    meta: { title: 'Dashboard', icon: 'mdi-view-dashboard' },
    children: [
      {
        path: '',
        name: '',
        component: () => import('@/views/dashboard'),
      },
    ],
  },
  {
    path: '/list',
    name: 'List',
    component: Layout,
    meta: { title: '列表页', icon: 'mdi-palette' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table'),
        meta: { title: '查询表格' },
      },
      {
        path: 'standardList',
        name: 'StandardList',
        component: () => import('@/views/list'),
        meta: { title: '标准列表' },
      },
      {
        path: 'searchList',
        name: 'SearchList',
        meta: { title: '搜索列表' },
        component: RouteView,
        children: [
          {
            path: 'article',
            name: 'Article',
            component: () => import('@/views/searchList/Article.vue'),
            meta: { title: '搜索列表（文章）' },
          },
          {
            path: 'project',
            name: 'Project',
            component: () => import('@/views/searchList/Project.vue'),
            meta: { title: '搜索列表（项目）' },
          },
          {
            path: 'app',
            name: 'App',
            component: () => import('@/views/searchList/Application.vue'),
            meta: { title: '搜索列表（应用）' },
          },
        ],
      },
    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;
