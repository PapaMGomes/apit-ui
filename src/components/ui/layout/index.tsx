import React from 'react'
import theme from '@/styles/css/ts/theme'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import GlobalStyle from '@/styles/css/ts/global'
import { ThemeProvider } from 'styled-components'
import AppToast from '@/components/common/app-toast'

interface LayoutInterface {
    children: React.ReactNode
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AppToast />

            <Header />
            {children}
            <Footer />
        </ThemeProvider>
    )
}

export default Layout
