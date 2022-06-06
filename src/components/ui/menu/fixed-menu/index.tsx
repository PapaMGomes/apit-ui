import React from 'react'
import { useRouter } from 'next/router'
import { MENU_CONFIG } from '@/config/menu.config'
import { BsChevronCompactDown } from 'react-icons/bs'
import { Container, Article, Title, Group, Item } from './styles'

const FixedMenu: React.FC = () => {
    const router = useRouter()

    const isActive = (path: string) => router.pathname === path

    const goTo = (path: string) => {
        if (isActive(path)) return
        else router.push(path)
    }

    const renderGroup = (childrenL: any[]) => {
        if (!childrenL.length) return <></>

        return (
            <Group>
                {childrenL.map((item, index) => (
                    <Item key={index}>{item.name}</Item>
                ))}
            </Group>
        )
    }

    return (
        <Container>
            {MENU_CONFIG.map((item, index) => (
                <Article key={index}>
                    <Title
                        color={item.theme.color}
                        onClick={() => goTo(item.route)}
                        showIcon={!!item.children.length}
                        className={isActive(item.route) ? 'active' : ''}
                    >
                        {item.name}
                        <BsChevronCompactDown />
                    </Title>
                    {renderGroup(item.children)}
                </Article>
            ))}
        </Container>
    )
}

export default FixedMenu
