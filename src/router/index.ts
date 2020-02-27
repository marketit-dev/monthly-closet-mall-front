const routes = [
    {
        path: '/home',
        name: '월간클로젯',
        icon: 'nc-icon nc-bank',
        component: () => import('../pages/HomeView'),
        layout: '',
        subRoutes: [],
    },
    {
        path: '/plan',
        name: 'PLAN',
        icon: 'nc-icon nc-bank',
        component: () => import('../pages/HomeView'),
        layout: '',
        subRoutes: [],
    },
];
export default routes;
