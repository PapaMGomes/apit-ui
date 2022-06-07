import React from 'react'
import { Text } from './styles'
import { THEME_CONFIG } from '@/config/theme.config'
import Spotlight, { SpotlightTitle } from '@/components/common/spotlight'

const ContactSpotlight: React.FC = () => {
    return (
        <Spotlight
            color={THEME_CONFIG.contact.color}
            containerClass="h-[40vh] sm:h-[35vh]"
        >
            <SpotlightTitle>Contato</SpotlightTitle>
            <Text>Fale conosco pelos telefones ou e-mail</Text>
        </Spotlight>
    )
}

export default ContactSpotlight
