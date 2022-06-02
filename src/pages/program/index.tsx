import React from 'react'
import AppHead from '@/components/common/app-head'
import Courses from '@/components/program/courses'
import ProgramSpotlight from '@/components/program/program-spotlight'
import { AppPageContainer } from '@/styles/css/components'

const Program: React.FC = () => {
    return (
        <>
            <AppHead title="Programas" />

            <AppPageContainer>
                <ProgramSpotlight />
                <Courses />
            </AppPageContainer>
        </>
    )
}

export default Program
