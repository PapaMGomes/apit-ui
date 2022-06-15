import React from 'react';
import { Container } from './styles';
import AppModal from '@/components/common/app-modal';
import { AppModalInterface } from '@/interfaces/_app-modal.interface';

interface ModalCurriculumRegistrationProps extends AppModalInterface { }

const ModalCurriculumRegistration: React.FC<ModalCurriculumRegistrationProps> = props =>  {
    const { isOpen, onBackdropClick, onClose } = props

    return (
        <AppModal
            width="90vw"
            isOpen={isOpen}
            onClickClose={onClose}
            onBackdropClick={onBackdropClick}
        >
            <Container>
                Cadastre seu currículo
            </Container>
        </AppModal>
    )
}

export default ModalCurriculumRegistration;