const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('@/pages/Index')
    },
    {
        path: '/indicator',
        name: 'indicator',
        component: () => import('@/pages/Indicator')
    }
]
export default routes