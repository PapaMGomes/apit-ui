import React from 'react'
import { THEME_CONFIG } from '@/config/theme.config'
import Spotlight, { SpotlightTitle } from '@/components/common/spotlight'

const CompanySpotlight: React.FC = () => {
    return (
        <Spotlight
            color={THEME_CONFIG.company.color}
            containerClass="h-[40vh] sm:h-[35vh]"
        >
            <SpotlightTitle>Empresas</SpotlightTitle>
        </Spotlight>
    )
}

export default CompanySpotlight
