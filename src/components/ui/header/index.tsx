import React from 'react'
import FixedMenu from '../menu/fixed-menu'
import Logo from '@/assets/images/logo.png'
import { Container, Nav, Content, ImageContainer, Image } from './styles'

const Header: React.FC = () => {
    return (
        <Container>
            <Nav>
                <Content>
                    <ImageContainer>
                        <Image src={Logo} alt="APIT Jovem Aprendiz" />
                    </ImageContainer>

                    <FixedMenu />
                </Content>
            </Nav>
        </Container>
    )
}

export default Header
