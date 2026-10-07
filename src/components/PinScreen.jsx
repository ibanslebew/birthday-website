import { useState } from "react";
import { motion } from "framer-motion";
import { content } from "../data/content";

export default function PinScreen({ onNext }) {
    const [pin, setPin] = useState("");
    const [error, setError] = useState(false);
    const pinLength = content.correctPin.length;

    const handlePress = (digit) => {
        if (pin.length >= pinLength) return;
        const newPin = pin + digit;
        setPin(newPin);

        if (newPin.length === pinLength) {
            if (newPin === content.correctPin) {
                setTimeout(onNext, 300);
            } else {
                setError(true);
                setTimeout(() => {
                    setError(false);
                    setPin("");
                }, 500);
            }
        }
    };

    const handleBackspace = () => {
        setPin((p) => p.slice(0, -1));
    };

    const handleClear = () => {
        setPin("");
    };

    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    return (
        <motion.div
            className="h-screen w-screen flex flex-col items-center bg-maroon-950 text-blush px-6 pt-16 pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="text-4xl mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
            >
                🌸
            </motion.div>

            <h1 className="font-display text-3xl text-center">For You, My Love</h1>
            <p className="text-sm text-blush/60 mt-2 mb-8 text-center">Enter our secret code</p>

            <div className={`flex gap-3 mb-10 ${error ? "animate-shake" : ""}`}>
                {Array.from({ length: pinLength }).map((_, i) => (
                    <span
                        key={i}
                        className={`w-3.5 h-3.5 rounded-full border transition-colors ${i < pin.length ? "bg-blush border-blush" : "border-blush/40"
                            }`}
                    />
                ))}
            </div>

            <div className="grid grid-cols-3 gap-5 w-full max-w-xs">
                {numbers.map((n) => (
                    <button
                        key={n}
                        onClick={() => handlePress(n)}
                        className="aspect-square rounded-full border border-blush/30 flex items-center justify-center text-2xl font-display active:bg-blush/10 transition"
                    >
                        {n}
                    </button>
                ))}

                <button
                    onClick={handleClear}
                    className="aspect-square rounded-full flex items-center justify-center text-xl text-blush/50 active:bg-blush/10 transition"
                >
                    ✕
                </button>

                <button
                    onClick={() => handlePress("0")}
                    className="aspect-square rounded-full border border-blush/30 flex items-center justify-center text-2xl font-display active:bg-blush/10 transition"
                >
                    0
                </button>

                <button
                    onClick={handleBackspace}
                    className="aspect-square rounded-full bg-blush/20 flex items-center justify-center text-lg active:bg-blush/30 transition"
                >
                    ⌫
                </button>
            </div>

            <p className="mt-10 text-xs text-blush/40 text-center">
                Hint: tanggal spesial kita 💕
            </p>
        </motion.div>
    );
}