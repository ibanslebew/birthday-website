import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "../../data/content";

export default function GratitudeJarSection() {
    const [note, setNote] = useState(null);
    const [count, setCount] = useState(0);
    const [shaking, setShaking] = useState(false);

    const handleShake = () => {
        if (shaking) return;
        setShaking(true);
        setNote(null);

        setTimeout(() => {
            const random =
                content.gratitudeNotes[
                Math.floor(Math.random() * content.gratitudeNotes.length)
                ];
            setCount((c) => c + 1);
            setNote(random);
            setShaking(false);
        }, 700);
    };

    return (
        <section className="min-h-screen px-6 py-24 flex flex-col items-center">
            <p className="uppercase tracking-[0.3em] text-xs text-blush/50 mb-2">
                From My Heart to Yours
            </p>
            <h2 className="font-display text-2xl mb-2 text-center">
                Reasons I'm Grateful to Know You
            </h2>
            <p className="text-sm text-blush/60 mb-10 text-center">
                Shake the jar and pick a note 🫙
            </p>

            <motion.div
                className="text-8xl mb-8"
                animate={shaking ? { rotate: [0, -12, 12, -12, 12, 0], x: [0, -6, 6, -6, 6, 0] } : {}}
                transition={{ duration: 0.6 }}
            >
                🫙
            </motion.div>

            <button
                onClick={handleShake}
                disabled={shaking}
                className="px-8 py-3 rounded-full bg-blush text-maroon-950 font-medium active:scale-95 transition disabled:opacity-50"
            >
                🫙 Shake the Jar
            </button>

            <AnimatePresence mode="wait">
                {note && (
                    <motion.div
                        key={note + count}
                        className="mt-10 w-full max-w-sm bg-white text-maroon-950 rounded-xl p-6 shadow-xl"
                        initial={{ opacity: 0, y: 30, rotate: -3 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <p className="text-xs text-maroon-950/40 text-right mb-2">#{count}</p>
                        <p className="font-display italic text-center leading-relaxed">{note}</p>
                        <p className="text-center mt-4">💕</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}