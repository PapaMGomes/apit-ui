import nodemailer from 'nodemailer'
import { TRANSPORT_CONFIG } from '@/config/email.config'

export class EmailService {
    _getTransport() {
        return nodemailer.createTransport(TRANSPORT_CONFIG)
    }

    send(params: any) {
        const transporter = this._getTransport()
        return transporter.sendMail(params)
    }
}
