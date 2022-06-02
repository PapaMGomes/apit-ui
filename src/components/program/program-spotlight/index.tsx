import React from 'react'
import theme from '@/styles/css/ts/theme'
import Spotlight, { SpotlightTitle } from '@/components/common/spotlight'
import { Text } from './styles'

const ProgramSpotlight: React.FC = () => {
    return (
        <Spotlight
            color={theme.colors.green}
            containerClass="h-[40vh] sm:h-[35vh]"
        >
            <SpotlightTitle>Programas</SpotlightTitle>
            <Text>
                A APIT disponibiliza, às Instituições de Ensino, serviços que
                garantem a qualidade, controle, acompanhamento e a legalidade
                dos estágios dos seus estudantes.
            </Text>
        </Spotlight>
    )
}

export default ProgramSpotlight
