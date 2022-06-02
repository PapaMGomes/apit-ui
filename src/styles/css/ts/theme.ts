import { rgba } from 'polished'

const menuHeight = 40
const headerHeight = 100
const footerHeight = 230

const colors = {
    text: '#656668',
    red: '#C62D24',
    gray: '#d1cdcd',
    blue: '#2774AC',
    green: '#84C63F',
    yellow: '#FAB713',
    orange: '#EB842A',
    purple: '#862260',
    danger: '#B03525',
    primary: '#2774AC',
    secondary: '#F06828',
    bgPrimary: '#fafafa',
    bgSecondary: '#d9d9d9'
}

const glass = {
    glassPrimary: rgba(colors.primary, 0.2)
}

const gradient = {
    gradient: `radial-gradient(circle, #D0DFEA 15%, #D0DFEA 100%);`
}

const sizes = {
    menuHeight: `${menuHeight}px`,
    headerHeight: `${headerHeight}px`,
    footerHeight: `${footerHeight}px`
}

const theme = {
    sizes,
    colors: {
        ...colors,
        ...glass,
        ...gradient
    }
}

export default theme
