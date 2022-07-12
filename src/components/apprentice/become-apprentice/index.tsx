import React from 'react'
import Team from '@/assets/images/apprentice/team.jpg'
import { Container, Title, Content, Text, Image, BreakLine } from './styles'
import ScrollAnimation from '@/components/ui/scroll-animation'

const BecomeApprentice: React.FC = () => {
    return (
        <Container>
            <ScrollAnimation animation="fadeInUp">
                <Title>Como se tornar um jovem aprendiz ?</Title>

                <Content>
                    <Text>
                        Os jovens que têm o interesse de ser um Jovem Aprendiz,
                        devem cadastrar os currículos pelo site da APIT É
                        importante que os jovens interessados realizem o curso
                        de Formação Profissional para o mundo do trabalho
                        oferecido gratuitamente nas unidades parceiras da APIT
                        ou via ensino à distância.
                        <BreakLine />
                        <BreakLine />
                        São muitas empresas que disponibilizam oportunidades ao
                        jovem aprendiz, por meio de programas de aprendizagem.
                        Ao surgirem vagas para o Programa Jovem Aprendiz, os
                        jovens são contatados pela área de triagem e
                        encaminhamento da APIT, que realizarão entrevistas
                        individuais com cada um e aprovados nesta etapa, vão
                        para entrevista com a empresa parceira. Se estiver no
                        perfil da vaga, serão contratados para realizarem a
                        etapa teórica na APIT.
                    </Text>

                    <Image src={Team} alt="Aprendiz"/>
                </Content>

                <Text>
                    A carga horária, conteúdo programático, locais e datas são
                    definidos e estruturados de acordo com a área de atuação ou
                    perfil da empresa parceira.
                </Text>

                <Text>Seja aprendiz APIT!</Text>
            </ScrollAnimation>
        </Container>
    )
}

export default BecomeApprentice
