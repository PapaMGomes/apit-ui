import React, { useState } from 'react'
import { Text, Button } from './styles'
import { THEME_CONFIG } from '@/config/theme.config'
import Spotlight, { SpotlightTitle } from '@/components/common/spotlight'
import ModalCurriculumRegistration from '@/components/modals/curriculum-registration'

const ProgramSpotlight: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <Spotlight
                color={THEME_CONFIG.program.color}
                containerClass="h-[40vh]"
            >
                <SpotlightTitle>Programas</SpotlightTitle>
                <Text>
                    A APIT disponibiliza, às Instituições de Ensino, serviços
                    que garantem a qualidade, controle, acompanhamento e a
                    legalidade dos estágios dos seus estudantes.
                </Text>

                <Button onClick={() => setIsModalOpen(true)}>Cadastre seu currículo</Button>
            </Spotlight>

            <ModalCurriculumRegistration
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}

export default ProgramSpotlight
