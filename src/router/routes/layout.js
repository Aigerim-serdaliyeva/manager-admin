import {application} from './application'

export const layout = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../../components/Layout.vue'),
    children: [
      {
        path: '/',
        name: 'main',
        component: () => import('../../components/Main.vue')
      },
      {
        path: '/application',
        name: 'application',
        component: () => import('../../components/application/Applications.vue'),
        children: [
          ...application
        ]
      },
      {
        path: '/management',
        name: 'management',
        component: () => import('../../components/management/Management.vue')
      },
      {
        path: '/directory',
        name: 'directory',
        component: () => import('../../components/directory/Directories.vue')
      }
    ]
  }
]