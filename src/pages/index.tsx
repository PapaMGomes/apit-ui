import React from 'react'
import AppHead from '@/components/common/app-head'
import About from '@/components/home/about'
import Partners from '@/components/home/partners'
import Spotlight from '@/components/home/spotlight'
import Principles from '@/components/home/principles'
import Differentials from '@/components/home/differentials'

const Home: React.FC = () => {
    return (
        <>
            <AppHead title="Home" />

            <Spotlight />
            <About />
            <Principles />
            <Differentials />
            <Partners />
        </>
    )
}

export default Home
