import { motion } from 'framer-motion'

export const TypewriterText = ({ text, delay = 0}: { text: string; delay?: number }) => {
    return (
        <motion.p
        initial={{opacity:0, x: -5}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.5, delay}}
        className='text-slate-400 italic mb-4 loading-relaxed'
        >
            <span className="text-emerald-500/50 mr-2 font-mono text-xs">DEBUG: </span>
            {text}
        </motion.p>
    )
}