import React from 'react'
import { useRouter } from 'next/router'
import FixedMenu from '../menu/fixed-menu'
import Logo from '@/assets/images/logo.png'
import { Container, Nav, Content, ImageContainer, Image } from './styles'

const Header: React.FC = () => {
    const router = useRouter()

    return (
        <Container>
            <Nav>
                <Content>
                    <ImageContainer onClick={() => router.push('/')}>
                        <Image src={Logo} alt="APIT Jovem Aprendiz" />
                    </ImageContainer>

                    <FixedMenu />
                </Content>
            </Nav>
        </Container>
    )
}

export default Header
