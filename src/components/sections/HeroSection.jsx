import { motion } from "framer-motion";
import { content } from "../../data/content";

export default function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <motion.p
                className="uppercase tracking-[0.3em] text-xs text-blush/60 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                Dari hatiku untukmu
            </motion.p>
            <motion.h1
                className="font-display text-4xl sm:text-5xl leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                Happy Birthday, <br /> {content.partnerName}
            </motion.h1>
            <motion.div
                className="mt-10 text-2xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
            >
                ↓
            </motion.div>
        </section>
    );
}