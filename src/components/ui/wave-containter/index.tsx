import React from 'react'
import { Container, Content, WavesContainter, Wave } from './styles'

interface WaveContainterProps {
    children: React.ReactNode
    height?: string | number
    containerClass?: string
}

const WaveContainter: React.FC<WaveContainterProps> = props => {
    const { children, height, containerClass } = props

    return (
        <Container style={{ height }} className={containerClass}>
            <WavesContainter>
                <Wave></Wave>
                <Wave></Wave>
                <Wave></Wave>
            </WavesContainter>

            <Content>{children}</Content>
        </Container>
    )
}

export default WaveContainter
