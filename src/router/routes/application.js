export const application = [
  {
    path: 'strategic',
    name: 'strategic',
    component: () => import('../../components/application/StrategicApplication.vue')
  },
  {
    path: 'operating',
    name: 'operating',
    component: () => import('../../components/application/OperatingApplication.vue')
  },
  {
    path: 'material',
    name: 'material',
    component: () => import('../../components/application/MaterialApplication.vue')
  },
  {
    path: 'payment',
    name: 'payment',
    component: () => import('../../components/application/PaymentApplication.vue')
  }
]