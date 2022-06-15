import React, { useState } from 'react'
import { Button } from './styles'
import { THEME_CONFIG } from '@/config/theme.config'
import Spotlight, { SpotlightTitle } from '@/components/common/spotlight'
import ModalCurriculumRegistration from '@/components/modals/curriculum-registration'

const ApprenticeSpotlight: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <Spotlight
                color={THEME_CONFIG.apprentice.color}
                containerClass="h-[40vh] sm:h-[35vh]"
            >
                <SpotlightTitle>Aprendiz</SpotlightTitle>
                <Button onClick={() => setIsModalOpen(true)}>
                    Cadastre seu currículo
                </Button>
            </Spotlight>

            <ModalCurriculumRegistration
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}

export default ApprenticeSpotlight
