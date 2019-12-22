export const application = [
  {
    path: 'strategic',
    name: 'strategic',
    component: () => import('../../components/application/StrategicApplication.vue')
    // path: '/application',
    // name: 'application',
    // component: () => import('../../components/application/Applications.vue'),
    // children: [
    //   {
    //     path: '/application/strategic',
    //     name: 'strategic',
    //     component: () => import('../../components/application/StrategicApplication.vue')
    //   }
    // ]
  }
]