import React, { useState } from 'react'
import { useRouter } from 'next/router'
import SideMenu from '../menu/side-menu'
import FixedMenu from '../menu/fixed-menu'
import Logo from '@/assets/images/logo.png'
import {
    Container,
    Nav,
    Content,
    ImageContainer,
    Image,
    Button,
    Line
} from './styles'

const Header: React.FC = () => {
    const router = useRouter()
    const [openSideMenu, setOpenSideMenu] = useState(false)

    return (
        <>
            <Container>
                <Nav>
                    <Content>
                        <ImageContainer onClick={() => router.push('/')}>
                            <Image src={Logo} alt="APIT Jovem Aprendiz" />
                        </ImageContainer>

                        <FixedMenu />

                        <Button onClick={() => setOpenSideMenu(true)}>
                            <Line />
                            <Line />
                            <Line />
                        </Button>
                    </Content>
                </Nav>
            </Container>

            <SideMenu
                isOpen={openSideMenu}
                onClose={() => setOpenSideMenu(false)}
            />
        </>
    )
}

export default Header
