import React from 'react'
import AppHead from '@/components/common/app-head'
import { AppPageContainer } from '@/styles/css/components'
import EventSpotlight from '@/components/event/event-spotlight'
import EventAvatar from '@/components/event/event-avatar'

const Event: React.FC = () => {
    return (
        <>
            <AppHead title="Eventos" />

            <AppPageContainer>
                <EventSpotlight />
                <EventAvatar />
            </AppPageContainer>
        </>
    )
}

export default Event
