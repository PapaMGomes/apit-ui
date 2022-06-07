import React from 'react'
import {
    Container,
    Content,
    Card,
    Button,
    Title,
    Text,
    Map,
    CardTitle
} from './styles'

const ContactAddress: React.FC = () => {
    const items = [
        {
            title: 'Matriz',
            phone: '(11) 91204-9508',
            link: 'https://goo.gl/maps/dtGuqSCzAxzZVM6G9',
            address: 'Rua Minas Bogasian, 350 Centro, Osasco - SP, 06013-010',
            mapURL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.96656646725!2d-46.78076308502276!3d-23.533704884696565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff0e4db2a367%3A0x36c1ec593fdc0f45!2sR.%20Minas%20Bogasian%2C%20350%20-%20Centro%2C%20Osasco%20-%20SP%2C%2006013-010!5e0!3m2!1spt-BR!2sbr!4v1654613878323!5m2!1spt-BR!2sbr'
        },
        {
            title: 'Filial',
            phone: '(11) 91204-9508',
            link: 'https://goo.gl/maps/8TFcn68dAd5kRGyR7',
            address: `Rua Nathanael Tito Salmon, 42 Centro, Osasco - SP, 06016-070`,
            mapURL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.048487998467!2d-46.780498185022786!3d-23.530758384698057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff05613e5695%3A0xdca38c8b40907a7b!2sR.%20Natanael%20Tito%20Salmon%2C%2042%20-%20Centro%2C%20Osasco%20-%20SP%2C%2006016-075!5e0!3m2!1spt-BR!2sbr!4v1654615125583!5m2!1spt-BR!2sbr'
        }
    ]

    const openURL = (url: string) => window.open(url, '_blank')

    return (
        <Container>
            <Title>Endereços</Title>

            <Content>
                {items.map((item, index) => (
                    <Card key={index}>
                        <CardTitle>{item.title}</CardTitle>

                        <Map src={item.mapURL} loading="lazy" />
                        <Text>{item.address}</Text>
                        <Text>{item.phone}</Text>

                        <Button onClick={() => openURL(item.link)}>
                            Abrir mapa
                        </Button>
                    </Card>
                ))}
            </Content>
        </Container>
    )
}

export default ContactAddress
