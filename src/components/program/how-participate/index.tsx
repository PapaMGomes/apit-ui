import React from 'react'
import { Container, Title, Content, Card, Text } from './styles'

const HowParticipate: React.FC = () => {
    const items = [
        { label: 'identificar as oportunidades de Estágio' },
        { label: 'ajustar suas condições de realização de Estágio' },
        { label: 'fazer o acompanhamento administrativo' },
        {
            label: 'encaminhar negociação de seguros contra acidentes pessoais do estudante'
        },
        {
            label: 'cadastrar os estudantes interessados em Estágio para encaminhar para as concedentes'
        }
    ]

    return (
        <Container>
            <Title>
                No processo de aperfeiçoamento do Estágio, auxiliamos as
                instituições de ensino a:
            </Title>

            <Content>
                {items.map((item, index) => (
                    <Card key={index}>
                        <Text>{item.label}</Text>
                    </Card>
                ))}
            </Content>

            <Title>
                Oferecemos ainda a seleção dos locais de estágio e organizamos o
                cadastro das empresas concedentes destas oportunidades.
            </Title>
        </Container>
    )
}

export default HowParticipate
