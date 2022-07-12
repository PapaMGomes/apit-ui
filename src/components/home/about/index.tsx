import React from 'react'
import Logo from '@/assets/images/clean-logo.png'
import ScrollAnimation from '@/components/ui/scroll-animation'
import {
    Container,
    Title,
    Subtitle,
    Content,
    Image,
    Text,
    Article
} from './styles'

const About: React.FC = () => {
    return (
        <Container>
            <Title>Sobre a APIT</Title>

            <Text>
                APIT Associação Promotora de Instrução e Trabalho com os
                programas Aprendiz Jovem foi criado para incentivar os
                empreendedores de todo território nacional, do 2º e do 3º setor,
                a estabelecerem perspectivas para a juventude através de
                inclusão de aprendizes adolescentes no mundo do trabalho. É uma
                ação promovida para incentivar a aplicação prática da Lei
                10.097, que regulariza o trabalho de adolescentes de 14 a 24
                anos, e, sobretudo, para qualificar a inclusão social de jovens
                que estejam vivendo situações de vulnerabilidade pessoal e
                social. O Programa conta com a parceria e certificada pelo CMDCA
                – Osasco e do Ministério do Trabalho.
            </Text>

            <Content>
                <ScrollAnimation animation="rollIn">
                    <Image src={Logo} alt="APIT" />
                </ScrollAnimation>

                <Article>
                    <Subtitle>Onde Atuamos</Subtitle>
                    <Text>
                        Responsabilidade Social, Excelência, Ética e
                        Transparência são valores que andam juntos com a APIT.
                        Localizada em Osasco, há mais de 10 anos, fazendo a
                        diferença na vida de diversos jovens.
                    </Text>

                    <Subtitle>Objetivo</Subtitle>
                    <Text>
                        Responsabilidade Social, Excelência, Ética e
                        Transparência são valores que andam juntos com a APIT.
                        Localizada em Osasco, há mais de 10 anos, fazendo a
                        diferença na vida de diversos jovens.
                    </Text>
                </Article>
            </Content>
        </Container>
    )
}

export default About
