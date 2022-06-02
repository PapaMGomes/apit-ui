import React from 'react'
import { Container, Content, WavesContainter, Wave } from './styles'

interface WaveContainterProps {
    children: React.ReactNode
    height?: string | number
    containerClass?: string
    color?: string
}

const WaveContainter: React.FC<WaveContainterProps> = props => {
    const { children, height, color, containerClass } = props

    return (
        <Container style={{ height }} className={containerClass}>
            <WavesContainter color={color}>
                <Wave color={color}></Wave>
                <Wave color={color}></Wave>
                <Wave color={color}></Wave>
            </WavesContainter>

            <Content>{children}</Content>
        </Container>
    )
}

export default WaveContainter
