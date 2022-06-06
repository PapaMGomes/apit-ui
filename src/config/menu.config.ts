import { THEME_CONFIG } from '@/config/theme.config'

export const MENU_CONFIG = [
    {
        id: 'home',
        name: 'Quem Somos',
        route: '/',
        theme: THEME_CONFIG.home,
        children: []
    },
    {
        id: 'program',
        name: 'Programas',
        route: '/program',
        theme: THEME_CONFIG.program,
        children: []
    },
    // {
    //     id: 'howParticipate',
    //     name: 'Como Participar',
    //     route: '/how-participate',
    //     theme: THEME_CONFIG.howParticipate,
    //     children: []
    // },
    {
        id: 'apprentice',
        name: 'Aprendiz',
        route: '/apprentice',
        theme: THEME_CONFIG.apprentice,
        children: []
    },
    {
        id: 'company',
        name: 'Empresas',
        route: '/company',
        theme: THEME_CONFIG.company,
        children: []
    },
    {
        id: 'event',
        name: 'Eventos',
        route: '/event',
        theme: THEME_CONFIG.event,
        children: []
    },
    {
        id: 'contact',
        name: 'Contato',
        route: '/contact',
        theme: THEME_CONFIG.contact,
        children: []
    }
]
