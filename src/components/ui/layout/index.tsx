import React from 'react'
import theme from '@/styles/css/ts/theme'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import GlobalStyle from '@/styles/css/ts/global'
import { ThemeProvider } from 'styled-components'

interface LayoutInterface {
    children: React.ReactNode
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />

            <Header />
            {children}
            <Footer />
        </ThemeProvider>
    )
}

export default Layout
