import React from 'react'
import AppHead from '@/components/common/app-head'
import About from '@/components/home/about'
import Partners from '@/components/home/partners'
import Principles from '@/components/home/principles'
import Differentials from '@/components/home/differentials'
import Spotlight, { SpotlightTitle } from '@/components/common/spotlight'

const Home: React.FC = () => {
    return (
        <>
            <AppHead title="Home" />

            <Spotlight containerClass="h-[60vh] sm:h-[30vh]">
                <SpotlightTitle>
                    Trabalhamos para educar e empregar jovens em busca de um
                    futuro melhor !!
                </SpotlightTitle>
            </Spotlight>

            <About />
            <Principles />
            <Differentials />
            <Partners />
        </>
    )
}

export default Home
