import '@/styles/css/global.css'
import store from '@/store'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Layout from '@/components/ui/layout'
import { MENU_CONFIG } from '@/config/menu.config'
import { ThemeService } from '@/services/_theme.service'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter()
    const themeService = new ThemeService()

    useEffect(() => onRouteChange(), [router.pathname])

    const onRouteChange = () => {
        setTheme()
    }

    const setTheme = () => {
        const current = MENU_CONFIG.find(({ route }) =>
            route.startsWith(router.pathname)
        )

        if (!current) return
        themeService.setScrollbarColor(current.theme.color)
        themeService.setFooterColor(current.theme.footerColor)
    }

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default MyApp
