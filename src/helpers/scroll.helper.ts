import Theme from '@/styles/css/ts/theme'

export function scrollTo(id: string) {
    const element = document.getElementById(id)
    if (!element) return

    const navHeight = Theme.sizes.headerHeight.replace(/\D/g, '')
    const to = element.offsetTop - Number(navHeight)

    window.scroll(0, to)
}
