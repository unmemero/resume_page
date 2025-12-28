import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X} from 'lucide-react';

interface MobileMenuProps {
    baseUrl?: string;
}

export default function MobileMenu({ baseUrl = '/' }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const updateTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };
        updateTheme();
        
        const observer = new MutationObserver(updateTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });
        
        return () => observer.disconnect();
    }, []);

    const menuItems = [
        {name: 'Skills', href:`${baseUrl}skills`},
        {name: 'Work', href: `${baseUrl}work`},
        {name: 'Education', href: `${baseUrl}education`},
        {name: 'Projects', href: `${baseUrl}projects`},
        {name: 'Contact', href: `${baseUrl}contact`}
    ];

    return(
        <div className="md:hidden flex items-center">
            <button
                onClick={()=>setIsOpen(true)}
                className="p-2 text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors"
            >
                <Menu className="w-6 h-6" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            exit={{opacity:0}}
                            onClick={()=>setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                        />

                        <motion.div
                            initial={{x:'100%'}}
                            animate={{x:0}}
                            exit={{x:"100%"}}
                            transition={{type:'spring', damping: 25, stiffness: 200}}
                            className="fixed right-0 top-0 h-full w-80 z-[70]"
                        >
                            <div 
                                className="h-full w-full flex flex-col"
                                style={{ 
                                    backgroundColor: isDark ? '#0a0a0c' : '#ffffff',
                                    boxShadow: isDark ? '-10px 0 30px rgba(16,185,129,0.1)' : '-10px 0 40px rgba(0,0,0,0.15)'
                                }}
                            >
                                {/* Header */}
                                <div 
                                    className="flex justify-between items-center p-6"
                                    style={{ 
                                        backgroundColor: isDark ? '#0a0a0c' : '#f1f5f9',
                                        borderBottom: isDark ? '1px solid rgba(16,185,129,0.2)' : '1px solid #e2e8f0' 
                                    }}
                                >
                                    <div className="flex items-center gap-2">
                                        <div 
                                            className="w-2 h-2 rounded-full animate-pulse"
                                            style={{ 
                                                backgroundColor: isDark ? '#10b981' : '#059669',
                                                boxShadow: isDark ? '0 0 10px #10b981' : '0 0 8px #059669'
                                            }}
                                        ></div>
                                        <span 
                                            className="font-mono text-xs tracking-wider font-semibold"
                                            style={{ color: isDark ? '#10b981' : '#047857' }}
                                        >
                                            MENU
                                        </span>
                                    </div>
                                    <button onClick={()=>setIsOpen(false)} className="group">
                                        <X 
                                            className="w-6 h-6 transition-all group-hover:rotate-90 duration-300" 
                                            style={{ color: isDark ? '#10b981' : '#64748b' }}
                                        />
                                    </button>
                                </div>

                                {/* Navigation Links */}
                                <nav 
                                    className="flex-1 flex flex-col justify-center px-6"
                                    style={{ backgroundColor: isDark ? '#0a0a0c' : '#ffffff' }}
                                >
                                    {menuItems.map((item, i)=>(
                                        <a   
                                            key={item.name}
                                            href={item.href}
                                            className="group flex items-center gap-4 py-5 transition-all hover:translate-x-2"
                                            style={{ 
                                                backgroundColor: isDark ? '#0a0a0c' : '#ffffff',
                                                borderBottom: isDark ? 'none' : '1px solid #f1f5f9'
                                            }}
                                        >
                                            <span 
                                                className="font-mono text-sm w-8 font-medium"
                                                style={{ color: isDark ? 'rgba(16,185,129,0.5)' : '#059669' }}
                                            >
                                                {String(i+1).padStart(2, '0')}
                                            </span>
                                            <span 
                                                className="text-2xl font-bold uppercase tracking-tight transition-colors"
                                                style={{ color: isDark ? '#e2e8f0' : '#334155' }}
                                            >
                                                {item.name}
                                            </span>
                                            <span 
                                                className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-lg"
                                                style={{ color: isDark ? '#10b981' : '#059669' }}
                                            >
                                                →
                                            </span>
                                        </a>
                                    ))}
                                </nav>

                                {/* Footer */}
                                <div 
                                    className="p-6"
                                    style={{ 
                                        backgroundColor: isDark ? '#0a0a0c' : '#f1f5f9',
                                        borderTop: isDark ? '1px solid rgba(16,185,129,0.2)' : '1px solid #e2e8f0' 
                                    }}
                                >
                                    <div className="flex items-center justify-between">
                                        <span 
                                            className="font-mono text-[9px] uppercase tracking-widest"
                                            style={{ color: isDark ? 'rgba(148,163,184,0.4)' : 'rgba(100,116,139,0.5)' }}
                                        >
                                            BUILD VERSION
                                        </span>
                                        <span 
                                            className="font-mono text-[9px] uppercase tracking-wide"
                                            style={{ color: isDark ? 'rgba(148,163,184,0.4)' : 'rgba(100,116,139,0.5)' }}
                                        >
                                            2.0.1
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span 
                                            className="w-1.5 h-1.5 rounded-full"
                                            style={{ backgroundColor: '#10b981' }}
                                        ></span>
                                        <span 
                                            className="font-mono text-[9px] uppercase"
                                            style={{ color: '#10b981' }}
                                        >
                                            STABLE
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}                
            </AnimatePresence>
        </div>

    );
}