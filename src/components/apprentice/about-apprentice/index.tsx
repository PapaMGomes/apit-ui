import React from 'react'
import Students from '@/assets/images/apprentice/student.jpg'
import { Container, Title, Content, Text, Image, BreakLine } from './styles'
import ScrollAnimation from '@/components/ui/scroll-animation'

const AboutApprentice: React.FC = () => {
    return (
        <Container>
            <ScrollAnimation animation="fadeInLeft">
                <Title>O que é ser um jovem aprendiz ?</Title>

                <Content>
                    <Image src={Students} alt="Aprendiz" />

                    <Text>
                        Ser um Jovem Aprendiz é aprimorar-se constantemente. São
                        jovens e adolescentes que almejam desenvolvimento e
                        crescimento profissional, dentro de uma área de atuação
                        específica, valorizam a educação e, principalmente,
                        desejam realizar sonhos. É a descoberta de oportunidades
                        e a possibilidade de inserção no mundo do trabalho.
                        <BreakLine />
                        <BreakLine />A APIT é responsável pela capacitação
                        destes jovens, por meio de Programas de Aprendizagem de
                        acordo com a Lei 10.097/00. No Programa Aprendiz APIT,
                        os jovens desenvolvem habilidades que atendem as
                        demandas do universo corporativo.
                    </Text>
                </Content>
            </ScrollAnimation>
        </Container>
    )
}

export default AboutApprentice
