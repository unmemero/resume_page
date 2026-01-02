import { defineAction, ActionError } from "astro:actions";
import { z } from 'astro:schema';
import { Resend } from "resend";
import fs from 'node:fs/promises';
import path from 'node:path';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    sendEmail: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string().min(1, "Name is Required"),
            email: z.string().email("Invalid format"),
            message: z.string().min(1, "Message is required"),
        }),
        handler: async (input)  => {
            try {
                //Get HTML
                const adminPath = path.resolve('./src/lib/templates/AdminEmail.html');
                const userPath = path.resolve('./src/lib/templates/UserReceipt.html');

                //Read file
                let adminHTML = await fs.readFile(adminPath, 'utf-8');
                let userHTML = await fs.readFile(userPath, 'utf-8');

                //Format content
                adminHTML = adminHTML
                    .replace('{{name}}', input.name)
                    .replace('{{email}}', input.email)
                    .replace('{{message}}', input.message);

                userHTML = userHTML.replace('{{name}}', input.name);

                //Send notification to personal email
                const { error: adminErr } = await resend.emails.send({
                    from: 'Resume Page <system@rafaelgarciaresume.com>',
                    to: 'rgarcia.cs.business@gmail.com',
                    subject: `[SYS_MSG] New message from ${input.name}`,
                    html: adminHTML,
                });

                if(adminErr) throw new Error(adminErr.message);

                const { error: userErr }  = await resend.emails.send({
                    from: 'Rafael Garcia <contact@rafaelgarciaresume.com>',
                    to: input.email,
                    subject: 'Confirmation Email',
                    html: userHTML,
                });

                if (userErr) console.error('User receipt failed to send.', userErr);
                
                return { success: true };
            } catch(e) {
                console.error("Backend error", e);
                throw new ActionError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Transmission Protocol Failure',
                });
            }
        },
    }),
};
