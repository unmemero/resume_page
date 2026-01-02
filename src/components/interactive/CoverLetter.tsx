import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypewriterText } from './TypewriterText';

interface CoverLetterProps {
    baseUrl?: string;
}

export default function CoverLetter({ baseUrl = '/' }: CoverLetterProps) {
    const [verbose, setVerbose] = useState(false);

    return (
        <div className='relative max-w-3xl mx-auto p-8 border border-slate-300 dark:border-slate-800 rounded-lg bg-white/95 dark:bg-slate-900/50 backdrop-blur-sm overflow-hidden flex flex-col shadow-md shadow-slate-200/60 dark:shadow-none'>
            
            {/* 1. THE SCANNING LINE (The moving green light) */}
            {verbose && (
                <motion.div
                    initial={{ top: "-10%" }}
                    animate={{ top: "110%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className='absolute left-0 w-full h-1 bg-emerald-500/20 z-0 pointer-events-none'
                />
            )}

            {/* 2. TERMINAL HEADER (The terminal looking thing with green pointer) */}
            <div className='relative z-10 flex justify-between items-center mb-8 border-b border-slate-300 dark:border-slate-800 pb-4'>
                <h1 className='text-sm font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-2'>
                    {/* Glowing Green Pointer/Status Light */}
                    <span className='w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]' />
                    rafael@dev - ~/resume - $ <span className='font-mono text-slate-800 dark:text-white'>cat cover_letter.md --{verbose ? "verbose" : "concise"}</span>
                </h1>
                <button
                    onClick={() => setVerbose(!verbose)}
                    className={`text-[10px] font-mono px-3 py-1 rounded border transition-all ml-4 ${
                        verbose
                            ? 'bg-emerald-500/10 dark:bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400'
                            : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-500'
                    }`}
                >
                    MODE: {verbose ? 'VERBOSE' : `CONCISE`}
                </button>
            </div>

            {/* 3. CONTENT AREA (Responsive Flex Container) */}
            <div className='relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8'>
    
            {/* Image Section */}
            <div className='relative group shrink-0 mb-4 md:mb-0'>
                <div className="absolute -inset-1 bg-emerald-500/20 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
                
                {/* Adjusted to w-32 on mobile (smaller) and w-44 on desktop */}
                <div className='relative w-40 h-40 md:w-44 md:h-56 overflow-hidden rounded-sm border border-emerald-500/50 dark:border-emerald-500/30 bg-slate-100 dark:bg-slate-950 shadow-2xl'>
                    <img 
                        src={`${baseUrl}assets/my_pic.jpg`} 
                        alt="Rafael Garcia" 
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'    
                    />
                        
                        {/* Hardware Overlays */}
                        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] opacity-30"></div>
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-400"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-emerald-400"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-emerald-400"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-400"></div>

                        <div className="absolute bottom-1 right-1 px-1 bg-emerald-500 text-white dark:text-slate-950 font-mono text-[10px] font-bold uppercase tracking-tighter">
                            Bio_IMG
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <motion.div layout className='flex-1 font-sans text-center md:text-left'>
                    <p className="text-lg text-slate-800 dark:text-white font-medium mb-6 leading-relaxed">
                        Hello Everyone. I'm <span className="text-emerald-600 dark:text-emerald-400 font-bold">Rafael Garcia</span>. 
                        I'm a Computer Science new grad from El Paso, Texas, with a deep interest 
                        in the intersection of low-level systems, automation, and AI infrastructure.
                    </p>

                    <AnimatePresence>
                        {verbose && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className='overflow-hidden text-left'
                            >
                                <TypewriterText delay={0.1} text="My journey started after getting out of seminary school (yes, I wanted to become a priest). When I discovered that wasn't my thing, I took some time to think very thoroughly what I wanted to do in life. One day, a very simple thought came into my mind, 'well, I like computers, why not computer science?'. From there I decided to start my journey in tech." />
                                <TypewriterText delay={0.3} text="During my degree I discovered my passions in Software Development, DevOps, Low-Level Systems, AI/ML, and (to a very small extent) hardware repair." />
                                <TypewriterText delay={0.5} text="Alongside my curriculum, I also participated in various activities, such as giving workshops for the Free and Open Source Software Club, attending 2 consecutive Great Minds in STEM workshops, served as vicepresident for the Art and Computer Science Student Organization, and received the National Science Foundation S-STEM scholarship." />
                                <TypewriterText delay={0.7} text="On top of my academic life. I also was a return intern at Walmart Global Tech with a full time offer to start in February in the position of Software Engineer II" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}