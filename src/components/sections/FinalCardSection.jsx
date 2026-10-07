import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { content } from "../../data/content";

export default function FinalCardSection() {
    const [closed, setClosed] = useState(false);

    return (
        <section className="min-h-[60vh] flex items-center justify-center px-6 py-16">
            <AnimatePresence mode="wait">
                {!closed ? (
                    <motion.div
                        key="card"
                        className="w-full max-w-sm bg-blush/10 border border-blush/20 rounded-2xl p-8 text-center backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-5xl mb-4">🎂</p>
                        <h2 className="font-display text-3xl mb-2">{content.finalCard.title}</h2>
                        <p className="text-sm text-blush/60 mb-8">{content.finalCard.subtitle} 🌸</p>
                        <button
                            onClick={() => setClosed(true)}
                            className="px-8 py-2.5 rounded-full bg-blush/20 border border-blush/40 text-blush active:scale-95 transition"
                        >
                            Close ✕
                        </button>
                    </motion.div>
                ) : (
                    <motion.p
                        key="closed"
                        className="font-display italic text-blush/50 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        🌸 Terima kasih sudah membaca sampai akhir 🌸
                    </motion.p>
                )}
            </AnimatePresence>
        </section>
    );
}