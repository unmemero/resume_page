import { useEffect, useState } from "react";
import { motion } from 'framer-motion'

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+';

export default function HeroText({ text } : { text : string }) {
    const [displayText, setDisplayText] = useState(text)

    useEffect(()=>{
        let iter = 0;
        const interval = setInterval(()=>{
            setDisplayText((prev)=>
                prev
                    .split('')
                    .map((_, idx)=>{
                        if (idx < iter) return text[idx];
                        return characters[Math.floor(Math.random() * characters.length)];
                    }).join('')
            );
            if (iter >= text.length) clearInterval(interval);
            iter += 1/3;
        }, 10);

        return ()=>clearInterval(interval);
    }, [text]);

    return (
        <motion.span
        initial={{opacity:0}}
        animate={{opacity:1}}
        className="inline-block font-mono"
        >
            {displayText}
        </motion.span>
    );
}
