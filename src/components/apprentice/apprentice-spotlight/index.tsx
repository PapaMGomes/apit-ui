import React from 'react'
import { Text } from './styles'
import { THEME_CONFIG } from '@/config/theme.config'
import Spotlight, { SpotlightTitle } from '@/components/common/spotlight'

const ApprenticeSpotlight: React.FC = () => {
    return (
        <Spotlight
            color={THEME_CONFIG.apprentice.color}
            containerClass="h-[40vh] sm:h-[35vh]"
        >
            <SpotlightTitle>Aprendiz</SpotlightTitle>
            <Text>
                A APIT disponibiliza, às Instituições de Ensino, serviços que
                garantem a qualidade, controle, acompanhamento e a legalidade
                dos estágios dos seus estudantes.
            </Text>
        </Spotlight>
    )
}

export default ApprenticeSpotlight
