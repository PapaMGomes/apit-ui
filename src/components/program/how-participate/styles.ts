import tw from "twin.macro";
import styled from "styled-components";
import { AppContainer } from "@/styles/css/components";
import { THEME_CONFIG } from "@/config/theme.config";

export const Container = styled(AppContainer)`
    ${tw`mt-12`}
`

export const Title = styled.b``

export const Content = styled.article`
    ${tw`my-6 grid gap-2 grid-cols-5 md:flex md:overflow-x-auto`}
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
        ${tw`hidden`}
    }
`

export const Card = styled.div`
    ${tw`p-4 flex items-center justify-center shadow-md rounded-lg md:min-w-[50vw]`}
    border: 1px solid ${() => THEME_CONFIG.program.color};
    scroll-snap-align: center;
`

export const Text = styled.p`
    ${tw`text-center cursor-default`}
`