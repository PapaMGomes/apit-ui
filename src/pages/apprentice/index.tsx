import React from 'react'
import AppHead from '@/components/common/app-head'
import { AppPageContainer } from '@/styles/css/components'
import AboutApprentice from '@/components/apprentice/about-apprentice'
import BecomeApprentice from '@/components/apprentice/become-apprentice'
import ApprenticeSpotlight from '@/components/apprentice/apprentice-spotlight'
import CurriculumRegistration from '@/components/common/curriculum-registration'

const Apprentice: React.FC = () => {
    return (
        <>
            <AppHead title="Aprendiz" />

            <AppPageContainer>
                <ApprenticeSpotlight />
                <AboutApprentice />
                <BecomeApprentice />
                <CurriculumRegistration />
            </AppPageContainer>
        </>
    )
}

export default Apprentice
