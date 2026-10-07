import { motion } from "framer-motion";
import { content } from "../../data/content";

export default function MemoriesSection() {
    return (
        <section className="min-h-screen px-6 py-24 flex flex-col items-center">
            <h2 className="font-display text-2xl mb-4 text-center">Perjalanan Kita</h2>
            <p className="text-sm text-blush/60 mb-14 text-center">Setiap kejadian, sebuah cerita</p>

            <div className="relative w-full max-w-sm">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-blush/30" />
                <div className="flex flex-col gap-10">
                    {content.memories.map((m, i) => (
                        <motion.div
                            key={i}
                            className="relative pl-12"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="absolute left-2 top-1.5 w-3 h-3 rounded-full bg-blush" />
                            <p className="text-xs uppercase tracking-wider text-blush/60 mb-1">{m.title}</p>
                            <p className="text-sm text-blush/90 leading-relaxed">{m.story}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}