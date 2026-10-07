import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { content } from "../../data/content";

export default function LetterSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [displayedText, setDisplayedText] = useState("");
    const fullText = content.loveLetter;

    useEffect(() => {
        if (!isInView) return;

        let index = 0;
        const speed = 25; // makin kecil = makin cepat ngetiknya (ms per huruf)

        const interval = setInterval(() => {
            index++;
            setDisplayedText(fullText.slice(0, index));
            if (index >= fullText.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [isInView, fullText]);

    const isDone = displayedText.length >= fullText.length;

    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
            <motion.div
                ref={ref}
                className="max-w-md bg-blush/10 border border-blush/20 rounded-2xl p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
            >
                <p className="font-display text-xl mb-6 text-center">
                    Untukmu, {content.partnerName}
                </p>
                <p className="whitespace-pre-line leading-relaxed text-sm text-blush/90 font-display italic min-h-[4rem]">
                    {displayedText}
                    {!isDone && (
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.6 }}
                            className="inline-block w-[2px] h-4 bg-blush ml-0.5 align-middle"
                        />
                    )}
                </p>
            </motion.div>
        </section>
    );
}