// src/services/emailService.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port: 465, 
    secure: true,
    auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
    },
});

export async function sendPasswordEmail(email: string, password: string): Promise<void> {
    const mailOptions = {
        from: process.env.EMAIL_USER!,
        to: email,
        subject: 'Your new account password',
        text: `Your new password is: ${password}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}
