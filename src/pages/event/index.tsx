import React from 'react'
import AppHead from '@/components/common/app-head'
import { AppContainer } from '@/styles/css/components'

const Event: React.FC = () => {
    return (
        <>
            <AppHead title="Eventos" />

            <AppContainer page>
                <div>Eventos</div>
            </AppContainer>
        </>
    )
}

export default Event
