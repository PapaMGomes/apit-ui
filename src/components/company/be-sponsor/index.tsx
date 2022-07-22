import React from 'react'
import { SiMicrosoftpowerpoint } from 'react-icons/si'
import { Container, Title, Text, Button } from './styles'

const BeSponsor: React.FC = () => {
    const downloadFile = () => {
        window.open('/files/patrocinador_saiba_mais.pptx', '_blank')
    }

    return (
        <Container>
            <Title>Seja um patrocinador</Title>
            <Text>
                A sua empresa tem a oportunidade de patrocinar a APIT. Para
                isso, criamos o programa APIT atividades, relacionando ações
                institucionais, educacionais e de eventos. Ao se tornar um
                pareiro ou patrocinador, você apoiará um projeto realmente
                relacionado a Responsabilidade Social, agregando valor aos
                jovens atendidos, à sua empresa e à sociedade como um todo.
            </Text>

            <Text>
                Um dos diferenciais da APIT é o acompanhamento que nós damos aos
                nossos jovens e adolescentes, para alavancarem no mercado de
                trabalho.
            </Text>

            <Title className="mt-4 mb-2">Entenda mais como funciona:</Title>
            <Button onClick={downloadFile}>
                Abrir Powerpoint
                <SiMicrosoftpowerpoint />
            </Button>
        </Container>
    )
}

export default BeSponsor
