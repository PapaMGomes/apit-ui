import Theme from '@/styles/css/ts/theme'

export const MENU_ITEMS = [
    {
        name: 'Quem Somos',
        route: '/',
        color: Theme.colors.purple,
        children: [
            // { name: 'Missão, Visão e Valores', route: '' },
            // { name: 'Nossos Diferenciais', route: '' },
            // { name: 'Parceiros', route: '' }
        ]
    },
    {
        name: 'Programas',
        route: '',
        color: Theme.colors.red,
        children: []
    },
    {
        name: 'Como Participar',
        route: '',
        color: Theme.colors.blue,
        children: []
    },
    {
        name: 'Aprendiz',
        route: '',
        color: Theme.colors.green,
        children: []
    },
    {
        name: 'Empresas',
        route: '',
        color: Theme.colors.yellow,
        children: []
    },
    {
        name: 'Eventos',
        route: '',
        color: Theme.colors.orange,
        children: []
    },
    {
        name: 'Contato',
        route: '',
        color: Theme.colors.purple,
        children: []
    }
]
