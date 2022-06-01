import React from 'react'
import Head from 'next/head'

const AppHead: React.FC<{ title: string }> = ({ title }) => {
    return (
        <Head>
            <title>APIT - {title}</title>
        </Head>
    )
}

export default AppHead
