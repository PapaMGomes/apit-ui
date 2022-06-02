import React from 'react'
import { Container, Content, Title } from './styles'

interface CommonInterface {
    children: React.ReactNode
}

interface SpotlightProps extends CommonInterface {
    color?: string
    containerClass?: string
}

const Spotlight: React.FC<SpotlightProps> = props => {
    const { children, containerClass, color } = props

    return (
        <Container color={color} className={containerClass}>
            <Content>{children}</Content>
        </Container>
    )
}

export const SpotlightTitle: React.FC<CommonInterface> = props => {
    return <Title>{props.children}</Title>
}

export default Spotlight
