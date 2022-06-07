import React from 'react'
import AppHead from '@/components/common/app-head'
import { AppContainer } from '@/styles/css/components'
import ContactEmail from '@/components/contact/contact-email'
import ContactAddress from '@/components/contact/contact-address'
import ContactSpotlight from '@/components/contact/contact-spotlight'

const Contact: React.FC = () => {
    return (
        <>
            <AppHead title="Contato" />

            <ContactSpotlight />

            <AppContainer page className="mt-12 flex md:flex-col">
                <ContactAddress />
                <ContactEmail />
            </AppContainer>
        </>
    )
}

export default Contact
