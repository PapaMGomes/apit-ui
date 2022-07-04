import type { NextApiRequest, NextApiResponse } from 'next'
import { TRANSPORT_CONFIG } from '@/config/email.config'
import nodemailer from 'nodemailer'

type ResponseData = { message: string }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        const transporter = nodemailer.createTransport(TRANSPORT_CONFIG)
        await transporter.sendMail(req.body)

        res.status(200).json({ message: 'Email enviado com sucesso' })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Ocorreu um erro ao enviar email' })
    }
}
