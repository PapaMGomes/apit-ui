import React from 'react'
import AppHead from '@/components/common/app-head'
import { AppContainer } from '@/styles/css/components'

const Company: React.FC = () => {
    return (
        <>
            <AppHead title="Empresas" />

            <AppContainer page>
                <div>Empresas</div>
            </AppContainer>
        </>
    )
}

export default Company
