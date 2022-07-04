import React from 'react'
import { useMapState } from '@/hooks/redux.hook'
import { Backdrop, Image, Label } from './styles'
import Logo from '@/assets/images/clean-logo.png'
import { LoadingStateInterface } from '@/store/@interfaces/loading.interface'

const AppLoading: React.FC = () => {
    const { isLoading, message } = useMapState(
        'loading'
    ) as LoadingStateInterface

    return (
        <>
            {isLoading ? (
                <Backdrop>
                    <Image src={Logo} alt="Carregando" />
                    <Label>{message || 'Carregando...'}</Label>
                </Backdrop>
            ) : (
                <></>
            )}
        </>
    )
}

export default AppLoading
