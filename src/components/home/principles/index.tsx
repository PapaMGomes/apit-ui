import React from 'react'
import ScrollAnimation from '@/components/ui/scroll-animation'
import { Section, Container, Content, Card, Image, Title, Text } from './styles'

const Principles: React.FC = () => {
    const items = [
        {
            animation: 'fadeInLeft',
            title: 'Missão',
            text: `Oferecer à comunidade soluções que contribuam efetivamente para a capacitação profissional da juventude, visando à sua integração ao mercado de trabalho e ao exercício da cidadania.`
        },
        {
            animation: 'fadeInUp',
            title: 'Visão',
            text: `Ser reconhecida como a melhor instituição da Região Oeste de São Paulo na interação educação e trabalho e qualificar a inclusão social de jovens que estejam vivendo situações de vulnerabilidade pessoal e social.`
        },
        {
            animation: 'fadeInRight',
            title: 'Valores',
            text: `Responsabilidade Social; Postura ética; Confiança; Aprimoramento Contínuo; Soluções Ágeis e Inovadoras; Competência e Orientação para resultados.`
        }
    ]

    return (
        <Section>
            <Container>
                <Content>
                    {items.map((item, index) => (
                        <ScrollAnimation key={index} animation={item.animation}>
                            <Card>
                                <Title>{item.title}</Title>
                                <Text>{item.text}</Text>
                            </Card>
                        </ScrollAnimation>
                    ))}
                </Content>
            </Container>
        </Section>
    )
}

export default Principles
