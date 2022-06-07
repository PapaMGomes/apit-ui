import React from 'react'
import { THEME_CONFIG } from '@/config/theme.config'
import Spotlight, { SpotlightTitle } from '@/components/common/spotlight'

const EventSpotlight: React.FC = () => {
    return (
        <Spotlight
            color={THEME_CONFIG.event.color}
            containerClass="h-[40vh] sm:h-[35vh]"
        >
            <SpotlightTitle>Eventos</SpotlightTitle>
        </Spotlight>
    )
}

export default EventSpotlight
