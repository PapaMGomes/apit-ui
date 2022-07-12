import React from 'react'
import { Container, Title, Content, Card, Text } from './styles'

const HowParticipate: React.FC = () => {
    const items = [
        { label: 'Identificar as oportunidades de Jovem Aprendiz' },
        { label: 'Ajustar suas condições de realização de Jovem Aprendiz' },
        { label: 'Fazer o acompanhamento administrativo' },
        {
            label: 'Encaminhar negociação de seguros contra acidentes pessoais do estudante'
        },
        {
            label: 'Cadastrar os estudantes interessados em Estágio para encaminhar para as concedentes'
        }
    ]

    return (
        <Container>
            <Title>
                No processo de aperfeiçoamento, auxiliamos as
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
