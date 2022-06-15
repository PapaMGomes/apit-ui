import React from 'react'
import { Button } from './styles'
import { scrollTo } from '@/helpers/scroll.helper'
import { THEME_CONFIG } from '@/config/theme.config'
import { DELEGATE } from '@/constants/delegate.constant'
import Spotlight, { SpotlightTitle } from '@/components/common/spotlight'

const CompanySpotlight: React.FC = () => {
    return (
        <Spotlight
            color={THEME_CONFIG.company.color}
            containerClass="h-[40vh] sm:h-[35vh]"
        >
            <SpotlightTitle>Empresas</SpotlightTitle>
            <Button
                onClick={() => scrollTo(DELEGATE.partnerCompanyRegistration)}
            >
                Seja um parceiro
            </Button>
        </Spotlight>
    )
}

export default CompanySpotlight
