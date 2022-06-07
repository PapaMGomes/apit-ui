import React from 'react'
import AppHead from '@/components/common/app-head'
import { AppPageContainer } from '@/styles/css/components'
import ContactSpotlight from '@/components/contact/contact-spotlight'

const Contact: React.FC = () => {
    return (
        <>
            <AppHead title="Contato" />

            <AppPageContainer>
                <ContactSpotlight />
            </AppPageContainer>
        </>
    )
}

export default Contact
