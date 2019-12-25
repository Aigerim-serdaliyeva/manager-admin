export const management = [
  {
    path: 'users',
    name: 'users',
    component: () => import('../../components/management/UsersManagement.vue')
  },
  {
    path: 'roles',
    name: 'roles',
    component: () => import('../../components/management/RolesManagement.vue')
  },
  {
    path: '',
    redirect: 'users'
  }
]