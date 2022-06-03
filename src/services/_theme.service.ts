export class ThemeService {
    private get rootStyle() {
        return document.documentElement.style
    }

    get footerColor() {
        return this.rootStyle.getPropertyValue('--footer-color')
    }

    setScrollbarColor(color: string) {
        this.rootStyle.setProperty('--scrollbar-color', color)
    }
    setFooterColor(color: string) {
        this.rootStyle.setProperty('--footer-color', color)
    }
}
