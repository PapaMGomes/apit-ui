import React from 'react'
import Partners from '@/components/home/partners'
import AppHead from '@/components/common/app-head'
import BeSponsor from '@/components/company/be-sponsor'
import { AppPageContainer } from '@/styles/css/components'
import CompanySpotlight from '@/components/company/company-spotlight'

const Company: React.FC = () => {
    return (
        <>
            <AppHead title="Empresas" />

            <AppPageContainer>
                <CompanySpotlight />
                <BeSponsor />
                <Partners />
            </AppPageContainer>
        </>
    )
}

export default Company
