import React from 'react'
import AppHead from '@/components/common/app-head'
import { AppPageContainer } from '@/styles/css/components'
import EventSpotlight from '@/components/event/event-spotlight'

const Event: React.FC = () => {
    return (
        <>
            <AppHead title="Eventos" />

            <AppPageContainer>
                <EventSpotlight />
            </AppPageContainer>
        </>
    )
}

export default Event
