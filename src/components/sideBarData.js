export const menuList = [
    {
        title: '组合api',
        id: 1,
        children: [{
            title: 'ref',
            path: '/ref',
            id: '1-1'
        },{
            title: 'reactive',
            path: '/reactive',
            id: '1-2'
        },{
            title: 'watch',
            path: '/watch',
            id: '1-3'
        },{
            title: 'toRaw',
            path: '/toRaw',
            id: '1-4'
        },{
            title: 'readonly',
            path: '/readonly',
            id: '1-5'
        },{
            title: 'computed',
            path: '/computed',
            id: '1-6'
        }]
    },{
        title: 'pinia',
        id: 2,
        children: [
            {
                title: 'state',
                path: '/pinia',
                id: '2-1'
            },
            {
                title: 'getters',
                path: '/getters',
                id: '2-2'
            }
        ]
    },{
        title: 'component',
        id: 3,
        children: [
            {
                title: '插槽',
                path: '/componentslot',
                id: '3-1'
            },{
                title: '属性',
                path: '/componentattr',
                id: '3-2'
            }
        ]
    }
]
