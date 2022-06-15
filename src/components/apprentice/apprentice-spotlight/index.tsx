import React from 'react'
import { Button } from './styles'
import { scrollTo } from '@/helpers/scroll.helper'
import { THEME_CONFIG } from '@/config/theme.config'
import { DELEGATE } from '@/constants/delegate.constant'
import Spotlight, { SpotlightTitle } from '@/components/common/spotlight'

const ApprenticeSpotlight: React.FC = () => {
    return (
        <Spotlight
            color={THEME_CONFIG.apprentice.color}
            containerClass="h-[40vh] sm:h-[35vh]"
        >
            <SpotlightTitle>Aprendiz</SpotlightTitle>
            <Button onClick={() => scrollTo(DELEGATE.curriculumRegistration)}>
                Cadastre seu currículo
            </Button>
        </Spotlight>
    )
}

export default ApprenticeSpotlight
