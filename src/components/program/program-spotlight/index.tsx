import React from 'react'
import { Text, Button } from './styles'
import { scrollTo } from '@/helpers/scroll.helper'
import { THEME_CONFIG } from '@/config/theme.config'
import { DELEGATE } from '@/constants/delegate.constant'
import Spotlight, { SpotlightTitle } from '@/components/common/spotlight'

const ProgramSpotlight: React.FC = () => {
    return (
        <Spotlight color={THEME_CONFIG.program.color} containerClass="h-[40vh]">
            <SpotlightTitle>Programas</SpotlightTitle>
            <Text>
                A APIT disponibiliza, às Instituições de Ensino, serviços que
                garantem a qualidade, controle, acompanhamento e a legalidade
                dos estágios dos seus estudantes.
            </Text>

            <Button onClick={() => scrollTo(DELEGATE.curriculumRegistration)}>
                Cadastre seu currículo
            </Button>
        </Spotlight>
    )
}

export default ProgramSpotlight
