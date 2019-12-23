import {application} from './application'
import { management } from './management'
import { directory } from './directory'

export const layout = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../../components/main/Layout.vue'),
    children: [
      {
        path: '/',
        name: 'main',
        component: () => import('../../components/main/Main.vue')
      },
      {
        path: '/application',
        name: 'application',
        component: () => import('../../components/application/Applications.vue'),
        children: application,
      },
      {
        path: '/management',
        name: 'management',
        component: () => import('../../components/management/Management.vue'),
        children: management
      },
      {
        path: '/directory',
        name: 'directory',
        component: () => import('../../components/directory/Directories.vue'),
        children: directory
      }
    ]
  }
]