import React from 'react'
import { THEME_CONFIG } from '@/config/theme.config'
import Spotlight, { SpotlightTitle } from '@/components/common/spotlight'

const ApprenticeSpotlight: React.FC = () => {
    return (
        <Spotlight
            color={THEME_CONFIG.apprentice.color}
            containerClass="h-[40vh] sm:h-[35vh]"
        >
            <SpotlightTitle>Aprendiz</SpotlightTitle>
        </Spotlight>
    )
}

export default ApprenticeSpotlight
