import { motion } from "framer-motion";
import { content } from "../../data/content";

export default function ClosingSection() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
            <motion.p
                className="text-sm text-blush/60 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                🌸 {content.closingWish.eyebrow} 🌸
            </motion.p>

            <motion.h2
                className="font-display text-3xl leading-snug mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
            >
                {content.closingWish.headline}
            </motion.h2>

            <motion.p
                className="text-sm text-blush/80 leading-relaxed max-w-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                {content.closingWish.body}
            </motion.p>

            <motion.p
                className="mt-8 font-display italic text-blush/60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
            >
                — With love that never runs out 💕 —
            </motion.p>
        </section>
    );
}