import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import Theme from '@/styles/css/ts/theme'
import Logo from '@/assets/images/logo.png'
import { FiLinkedin } from 'react-icons/fi'
import WaveContainter from '../wave-containter'
import { ThemeService } from '@/services/_theme.service'
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'
import {
    Container,
    Content,
    Text,
    Section,
    Image,
    Article,
    SocialMediaItem,
    SocialMediaContainer
} from './styles'

const Footer: React.FC = () => {
    const router = useRouter()
    const [footerColor, setFooterColor] = useState(Theme.colors.orange)
    const themeService = new ThemeService()

    useEffect(() => {
        setTimeout(() => setFooterColor(themeService.footerColor), 250)
    }, [router.pathname])

    const socialMedia = [
        {
            title: 'Instagram',
            icon: <FaInstagram />,
            link: 'https://www.instagram.com/apit.aprendiz/'
        },
        {
            title: 'Facebook',
            icon: <FaFacebookF />,
            link: 'https://www.facebook.com/pages/APIT-Aprendiz/619999444729659?ref=hl'
        },
        {
            title: 'YouTube',
            icon: <FaYoutube />,
            link: 'https://www.youtube.com/channel/UCdPeTQpDNFk_StkOnEjNTAw'
        },
        {
            title: 'LinkedIn',
            icon: <FiLinkedin />,
            link: 'https://www.linkedin.com/company/apit-aprendiz'
        }
    ]

    const currentYear = format(new Date(), 'yyyy')

    const openURL = (url: string) => window.open(url, '_blank')

    return (
        <Container>
            <WaveContainter
                color={footerColor}
                height={Theme.sizes.footerHeight}
            >
                <Content>
                    <Section>
                        <Article>
                            <Image src={Logo} alt="APIT" />

                            <SocialMediaContainer>
                                {socialMedia.map((item, index) => (
                                    <SocialMediaItem
                                        key={index}
                                        title={item.title}
                                        onClick={() => openURL(item.link)}
                                    >
                                        {item.icon}
                                    </SocialMediaItem>
                                ))}
                            </SocialMediaContainer>
                        </Article>

                        <Text>
                            {currentYear} © APIT Direitos reservados a APIT –
                            Associação Promotora de Instrução e Trabalho
                        </Text>
                    </Section>
                </Content>
            </WaveContainter>
        </Container>
    )
}

export default Footer
