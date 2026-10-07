import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "../../data/content";

export default function FlowerSection() {
    const [rotation, setRotation] = useState(0);
    const [spinning, setSpinning] = useState(false);
    const [result, setResult] = useState(null);
    const [collected, setCollected] = useState([]);

    const flowers = content.flowers;
    const segmentAngle = 360 / flowers.length;

    const handleSpin = () => {
        if (spinning) return;
        setSpinning(true);
        setResult(null);

        const winnerIndex = Math.floor(Math.random() * flowers.length);
        const extraSpins = 5;
        const targetAngle =
            360 * extraSpins +
            (360 - winnerIndex * segmentAngle - segmentAngle / 2);

        const newRotation = rotation + targetAngle;
        setRotation(newRotation);

        setTimeout(() => {
            const winner = flowers[winnerIndex];
            setResult(winner);
            setCollected((prev) => (prev.includes(winner.id) ? prev : [...prev, winner.id]));
            setSpinning(false);
        }, 3200);
    };

    return (
        <section className="min-h-screen px-6 py-20 flex flex-col items-center">
            <p className="uppercase tracking-[0.3em] text-xs text-blush/50 mb-2">My First Gift</p>
            <h2 className="font-display text-2xl mb-2 text-center">Roda Bunga Keberuntungan</h2>
            <p className="text-sm text-blush/60 mb-10 text-center max-w-xs">
                Putar rodanya dan lihat makna bunga yang kamu dapat
            </p>

            <div className="relative w-64 h-64 mb-8">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 text-2xl">
                    🔻
                </div>

                <motion.div
                    className="w-full h-full rounded-full relative overflow-hidden shadow-xl border-4 border-blush/40"
                    animate={{ rotate: rotation }}
                    transition={{ duration: 3, ease: [0.17, 0.67, 0.32, 1] }}
                >
                    {flowers.map((f, i) => {
                        const angle = segmentAngle * i;
                        return (
                            <div
                                key={f.id}
                                className="absolute w-1/2 h-1/2 origin-bottom-right"
                                style={{
                                    top: 0,
                                    left: 0,
                                    transform: `rotate(${angle}deg) skewY(${90 - segmentAngle}deg)`,
                                    backgroundColor: f.color,
                                }}
                            />
                        );
                    })}

                    {flowers.map((f, i) => {
                        const angle = segmentAngle * i + segmentAngle / 2;
                        const rad = (angle - 90) * (Math.PI / 180);
                        const radius = 85;
                        const x = 128 + radius * Math.cos(rad);
                        const y = 128 + radius * Math.sin(rad);
                        return (
                            <span
                                key={f.id}
                                className="absolute text-2xl"
                                style={{
                                    left: `${x}px`,
                                    top: `${y}px`,
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                {f.emoji}
                            </span>
                        );
                    })}
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-blush border-4 border-maroon-950" />
                </div>
            </div>

            <button
                onClick={handleSpin}
                disabled={spinning}
                className="px-10 py-3 rounded-full bg-blush text-maroon-950 font-medium active:scale-95 transition disabled:opacity-50"
            >
                {spinning ? "Memutar..." : "🎡 Putar"}
            </button>

            <AnimatePresence mode="wait">
                {result && !spinning && (
                    <motion.div
                        key={result.id + collected.length}
                        className="mt-8 w-full max-w-sm bg-blush/10 border border-blush/20 rounded-2xl px-5 py-4 text-center"
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <p className="text-3xl mb-1">{result.emoji}</p>
                        <p className="font-display text-lg">{result.name}</p>
                        <p className="text-sm text-blush/70 mt-1 italic">{result.meaning}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {collected.length > 0 && (
                <div className="mt-10 w-full max-w-sm">
                    <p className="text-xs text-blush/50 mb-3 text-center uppercase tracking-wider">
                        Koleksimu ({collected.length}/{flowers.length})
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {collected.map((id) => {
                            const f = flowers.find((x) => x.id === id);
                            return (
                                <span
                                    key={id}
                                    className="text-2xl bg-blush/10 rounded-full w-12 h-12 flex items-center justify-center border border-blush/20"
                                >
                                    {f.emoji}
                                </span>
                            );
                        })}
                    </div>
                </div>
            )}

            {collected.length === flowers.length && (
                <motion.p
                    className="mt-6 text-sm font-display italic text-blush/80 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    🎉 Semua bunga sudah kamu dapatkan!
                </motion.p>
            )}
        </section>
    );
}