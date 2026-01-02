/*import React, { useState } from 'react';
import { Send, Terminal, ShieldCheck, Loader2 } from 'lucide-react';
import { actions } from 'astro:actions'

export default function ContactForm(){
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    
    const handleSubmit= async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');
        const formData = new FormData(e.currentTarget);

        const { error } = await actions.sendEmail(formData) 
    }
}*/