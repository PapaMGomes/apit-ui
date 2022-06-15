import React from 'react'
import AppHead from '@/components/common/app-head'
import Courses from '@/components/program/courses'
import { AppPageContainer } from '@/styles/css/components'
import HowParticipate from '@/components/program/how-participate'
import ProgramSpotlight from '@/components/program/program-spotlight'
import CurriculumRegistration from '@/components/common/curriculum-registration'

const Program: React.FC = () => {
    return (
        <>
            <AppHead title="Programas" />

            <AppPageContainer>
                <ProgramSpotlight />
                <HowParticipate />
                <Courses />
                <CurriculumRegistration />
            </AppPageContainer>
        </>
    )
}

export default Program
