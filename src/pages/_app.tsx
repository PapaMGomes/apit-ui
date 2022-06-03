import '@/styles/css/global.css'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Layout from '@/components/ui/layout'
import { ThemeService } from '@/services/_theme.service'
import { MENU_ITEMS } from '@/components/ui/menu/_data'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter()
    const themeService = new ThemeService()

    useEffect(() => onRouteChange(), [router.pathname])

    const onRouteChange = () => {
        setTheme()
    }

    const setTheme = () => {
        const current = MENU_ITEMS.find(({ route }) =>
            route.startsWith(router.pathname)
        )

        if (!current) return
        themeService.setScrollbarColor(current.theme.color)
        themeService.setFooterColor(current.theme.footerColor)
    }

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
