import { useRouter } from 'next/router'
import Logo from '@/assets/images/clean-logo.png'
import { MENU_CONFIG } from '@/config/menu.config'
import { BsChevronCompactDown } from 'react-icons/bs'
import React, { useEffect, useRef, useState } from 'react'
import {
    Backdrop,
    Container,
    Image,
    Content,
    Group,
    Item,
    Article,
    Title
} from './styles'

interface SideMenuProps {
    isOpen: boolean
    onClose: Function
}

const SideMenu: React.FC<SideMenuProps> = props => {
    const router = useRouter()
    const backdropEl = useRef(null)
    const [selected, setSelected] = useState('')

    const { isOpen, onClose } = props

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    }, [isOpen])

    const handleClose = () => {
        animationEnd()
        setTimeout(() => onClose(), 750)
    }

    const handleBackdropClick = (element: EventTarget) => {
        const isBackdrop = element === backdropEl.current
        if (!isBackdrop) return

        handleClose()
    }

    const isActive = (path: string) => router.pathname === path

    const goTo = (item: any) => {
        setSelected('')

        if (item.children?.length) setSelected(item.id)
        else if (isActive(item.route)) return
        else router.push(item.route)

        handleClose()
    }

    const animationEnd = () => {
        const containerEl = document.getElementById('container')
        containerEl?.classList.add('animate__fadeOutRight')
    }

    const renderGroup = (childrenL: any[]) => {
        if (!childrenL.length) return <></>

        return (
            <Group>
                {childrenL.map((item, index) => (
                    <Item key={index} onClick={() => goTo(item)}>
                        {item.name}
                    </Item>
                ))}
            </Group>
        )
    }

    return (
        <>
            {isOpen && (
                <Backdrop
                    ref={backdropEl}
                    onClick={({ target }) => handleBackdropClick(target)}
                >
                    <Container id="container">
                        <Image src={Logo} alt="APIT" />

                        <Content>
                            {MENU_CONFIG.map((item, index) => (
                                <Article
                                    key={index}
                                    isOpen={item.id === selected}
                                >
                                    <Title
                                        color={item.theme.color}
                                        onClick={() => goTo(item)}
                                        showIcon={!!item.children.length}
                                        className={
                                            isActive(item.route) ? 'active' : ''
                                        }
                                    >
                                        {item.name}
                                        <BsChevronCompactDown />
                                    </Title>
                                    {renderGroup(item.children)}
                                </Article>
                            ))}
                        </Content>
                    </Container>
                </Backdrop>
            )}
        </>
    )
}

export default SideMenu
