import React from 'react'
import AppHead from '@/components/common/app-head'
import { AppContainer } from '@/styles/css/components'

const Home: React.FC = () => {
    return (
        <>
            <AppHead title="Home" />

            <AppContainer>
                <div style={{ height: '110vh' }}>Home Page</div>
            </AppContainer>
        </>
    )
}

export default Home
