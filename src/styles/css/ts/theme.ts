const headerHeight = 100
const footerHeight = 170

const colors = {
    text: '#111827',
    gray: '#8F8F8F',
    danger: '#B03525',
    primary: '#5558CA',
    warning: '#D3CE27',
    success: '#7ED321',
    secondary: '#C837AB',
    bgPrimary: '#fafafa',
    bgSecondary: '#e1d9d9'
}

const sizes = {
    headerHeight: `${headerHeight}px`,
    footerHeight: `${footerHeight}px`,
    paddingTopContainer: `calc(${headerHeight}px + 26px)`
}

const theme = {
    sizes,
    colors: {
        ...colors,
        gradient: `linear-gradient(252.78deg, ${colors.primary} 20.97%, ${colors.secondary} 76.04%)`
    }
}

export default theme
