import React from 'react'
import GeofixLogo from '@/assets/images/partners/geofix.png'
import SathelLogo from '@/assets/images/partners/sathel.png'
import SystemLogo from '@/assets/images/partners/system.png'
import NorteneLogo from '@/assets/images/partners/nortene.png'
import RedeDorLogo from '@/assets/images/partners/rede-dor.png'
import PapaMikeLogo from '@/assets/images/partners/papa-mike.png'
import AnhangueraLogo from '@/assets/images/partners/anhanguera.png'
import AlbertSabinLogo from '@/assets/images/partners/albert-sabin.png'
import VitalBrasilLogo from '@/assets/images/partners/vital-brasil.png'
import AmaroJulianaLogo from '@/assets/images/partners/amaro-juliana.png'
import ControleAnaliticoLogo from '@/assets/images/partners/controle-analitico.png'

import { Container, Content, Title, Card, Image, CardTitle } from './styles'

const Partners: React.FC = () => {
    const items = [
        { image: '', title: 'Danleste' },
        { image: AlbertSabinLogo, title: 'Albert Sabin' },
        { image: AmaroJulianaLogo, title: 'Amaro Julina' },
        { image: ControleAnaliticoLogo, title: 'Controle Analitico' },
        { image: '', title: 'Pereiras Diesel' },
        { image: GeofixLogo, title: 'Geofix' },
        { image: SathelLogo, title: 'Sathel' },
        { image: '', title: 'Promoleste' },
        { image: SystemLogo, title: 'System' },
        { image: VitalBrasilLogo, title: 'Vital Brazil' },
        { image: '', title: 'Dialto Peças' },
        { image: PapaMikeLogo, title: 'Papa Mike' },
        { image: AnhangueraLogo, title: 'Anhanguera' }
    ]

    return (
        <Container>
            <Title>Parceiros</Title>

            <Content>
                {items.map((item, index) => (
                    <Card key={index} title={item.title}>
                        {item.image ? (
                            <Image src={item.image} alt={item.title} />
                        ) : (
                            <CardTitle>{item.title}</CardTitle>
                        )}
                    </Card>
                ))}
            </Content>
        </Container>
    )
}

export default Partners
