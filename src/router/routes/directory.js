export const directory = [
  {
    name: 'object',
    path: 'object',
    component: () => import('../../components/directory/ObjectDirectory.vue')
  },
  {
    path: 'materials',
    name: 'materials',
    component: () => import('../../components/directory/MaterialsDirectory.vue')
  },
  {
    path: 'category-materials',
    name: 'category-materials',
    component: () => import('../../components/directory/CategoryDirectory.vue')
  },
  {
    path: 'cities',
    name: 'cities',
    component: () => import('../../components/directory/CitiesDirectory.vue')
  },
  {
    path: 'suppliers',
    name: 'suppliers',
    component: () => import('../../components/directory/SuppliersDirectory.vue')
  }
]