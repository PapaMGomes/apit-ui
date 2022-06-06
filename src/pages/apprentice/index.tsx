import React from 'react'
import AppHead from '@/components/common/app-head'
import { AppPageContainer } from '@/styles/css/components'
import ApprenticeSpotlight from '@/components/apprentice/apprentice-spotlight'

const Apprentice: React.FC = () => {
    return (
        <>
            <AppHead title="Aprendiz" />

            <AppPageContainer>
                <ApprenticeSpotlight />
            </AppPageContainer>
        </>
    )
}

export default Apprentice
