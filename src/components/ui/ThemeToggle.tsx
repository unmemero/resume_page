import { useEffect, useState } from "react";
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<string | null>(null);

    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme') ?? 'dark';
        setTheme(savedTheme);
    },[]);

    useEffect(()=>{
        if (!theme) return;

        const root = document.documentElement;
        if(theme === 'light') {
            root.classList.remove('dark');
        } else {
            root.classList.add('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    if (!theme) return <div className="w-9 h-9" />

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-md border border-slate-800 dark:border-slate-200/10 hover:bg-emerald-500/10 transition-all group"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-600 group-hover:text-emerald-500" />
            ):(
                <Sun className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300" />
            )}
        </button>
    );
}