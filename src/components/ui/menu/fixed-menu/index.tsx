import React from 'react'
import { MENU_ITEMS } from '../_data'
import { BsChevronCompactDown } from 'react-icons/bs'
import { Container, Article, Title, Group, Item } from './styles'
import { useRouter } from 'next/router'

const FixedMenu: React.FC = () => {
    const router = useRouter()

    const isActive = (path: string) => {
        if (router.pathname === '/') return router.pathname === path

        return router.pathname.startsWith(path)
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
            {MENU_ITEMS.map((item, index) => (
                <Article key={index}>
                    <Title
                        color={item.color}
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
