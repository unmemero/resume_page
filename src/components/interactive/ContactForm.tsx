import React, { useState } from 'react';
import { Terminal, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';
import { actions } from 'astro:actions';

export default function ContactForm(){
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    
    const handleSubmit= async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');
        const formData = new FormData(e.currentTarget);

        const { error } = await actions.sendEmail(formData)

        if(error) {
            console.error(error);
            setStatus('error')
        }else{setStatus('success');}
    }

    if (status === 'success'){
        return (
            <div className='
                border border-emerald-500/30 bg-emerald-500/5 p-12 text-center
                space-y-5 animate-in fade-in zoom-in duration-500
            '>
                <ShieldCheck className='mx-auto text-emerald-500'
                    size={56}
                />
                <h3 className='text-white font-mono uppercase tracking-[0.2em]
                    text-sm mb-2 font-bold
                '>
                    Packet_Delivered
                </h3>
                <p className='text-slate-500 text-[10px] font-mono leading-relaxed'>
                    Email transmited successfully. An email confirmation has been sent to the provided email address. 
                    <br />If you haven't received a response in 3-5 business days, please reach out again.
                </p>
                <button
                    onClick={()=>setStatus('idle')} 
                    className='text-[9px] text-emerald-500 border 
                    border-emerald-500/20 px-4 py-2 hover:bg-emerald-500
                    hover:text-black font-mono transition-all
                '>
                    SEND NEW EMAIL
                </button>
            </div>
        );
    }

    return (
        <div className='relative border border-slate-300 dark:border-slate-700 bg-white/95 dark:bg-slate-800/90 backdrop-blur-sm p-8 md:p-10 group 
            transition-all hover:border-emerald-500/60 rounded-lg shadow-md shadow-slate-200/60 dark:shadow-lg
        '>
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-emerald-400" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-emerald-400" />

            <form 
                onSubmit={handleSubmit}
                className='space-y-8'
            >
                <div className='flex items-center gap-3 mb-10 border-b
                    border-slate-300 dark:border-slate-700 pb-3
                '>
                    <Terminal 
                        size={14}
                        className='text-emerald-500'
                    />
                    <span
                        className='font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold'
                    >
                        Transmission_Input
                    </span>
                </div>

                <div className='space-y-6'>
                    <input 
                        name='name' 
                        required 
                        placeholder='Your Name' 
                        className='w-full bg-transparent border-b border-slate-300 dark:border-slate-700 py-3 font-mono
                        text-xs text-slate-800 dark:text-white outline-none focus:border-emerald-500 transition-all
                        placeholder:text-slate-400 dark:placeholder:text-slate-500'
                    />
                    <input 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="Your Email" 
                        className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 py-3 font-mono 
                        text-xs text-slate-800 dark:text-white outline-none focus:border-emerald-500 transition-all 
                        placeholder:text-slate-400 dark:placeholder:text-slate-500" 
                    />
                    <textarea 
                        name="message" 
                        required 
                        rows={4} 
                        placeholder="Message" 
                        className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 py-3 font-mono 
                        text-xs text-slate-800 dark:text-white outline-none focus:border-emerald-500 transition-all 
                        placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none" 
                    />
                </div>

                {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 font-mono text-[9px] 
                        bg-red-500/5 p-3 border border-red-500/20"
                    >
                        <AlertCircle size={12} /> ERROR: TRANSMISSION_FAILED // RETRY_LATER
                    </div>
                )}

                <input 
                    type="text" 
                    name="_honey" 
                    className="hidden" 
                    tabIndex={-1} 
                    autoComplete="off" 
                />

                <button disabled={status === 'sending'} className="w-full py-5 bg-emerald-500/5 border border-emerald-500/40 text-emerald-500 font-mono text-[11px] uppercase tracking-[0.4em] hover:bg-emerald-500 hover:text-black transition-all duration-300 relative overflow-hidden group">
                    {status === 'sending' ? (
                        <div className="flex items-center justify-center gap-2">
                            <Loader2 className="animate-spin" size={14} /> TRANSMITTING MESSAGE
                        </div>
                    ) : 'SEND EMAIL'}
                </button>
            </form>
        </div>
    );
}