import ScrollAnimation from '@/components/ui/scroll-animation'
import React from 'react'
import { Container, Content, Article, Title, Subtitle, Item } from './styles'

const Differentials: React.FC = () => {
    const companyItems = [
        'Associação com alta credibilidade e segurança',
        'Atendimento e suporte personalizados',
        'Jovens pré-qualificados',
        'Serviço de triagem e encaminhamento',
        'Capacitação dos jovens e preparação para o mercado de trabalho'
    ]

    const apprenticeItems = [
        'Capacitação do Aprendiz para o mercado de trabalho',
        'Aulas excelentes e conteúdos importantes',
        'Central de Relacionamento presencial',
        'Projetos socioeducacionais',
        'Acompanhamento do Aprendiz  APIT x Empresa',
        'Palestras sobre o mercado de trabalho'
    ]

    return (
        <Container>
            <Title>Nossos Diferenciais</Title>

            <Content>
                <Article>
                    <Subtitle>Para o seu aprendiz:</Subtitle>

                    {apprenticeItems.map((item, index) => (
                        <ScrollAnimation key={index} animation="fadeInLeft">
                            <Item>{item}</Item>
                        </ScrollAnimation>
                    ))}
                </Article>

                <Article>
                    <Subtitle>Para a sua empresa:</Subtitle>

                    {companyItems.map((item, index) => (
                        <ScrollAnimation key={index} animation="fadeInRight">
                            <Item>{item}</Item>
                        </ScrollAnimation>
                    ))}
                </Article>
            </Content>
        </Container>
    )
}

export default Differentials
