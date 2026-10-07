import { useState } from "react";
import { motion } from "framer-motion";
import { useAudio } from "../context/AudioContext";

export default function GiftBoxScreen({ onNext }) {
    const [opened, setOpened] = useState(false);
    const { startBackground } = useAudio();

    const handleOpen = () => {
        setOpened(true);
        startBackground();
        setTimeout(onNext, 1400);
    };

    return (
        <motion.div
            className="h-screen w-screen flex flex-col items-center justify-center bg-maroon-950 text-blush px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.p
                className="font-display text-xl mb-10 text-center"
                animate={opened ? { opacity: 0 } : { opacity: 1 }}
            >
                ✨ Membuka hadiahmu... ✨
            </motion.p>

            <motion.button
                onClick={handleOpen}
                disabled={opened}
                className="text-8xl"
                animate={
                    opened
                        ? { scale: [1, 1.4, 0], rotate: [0, -10, 10, 0] }
                        : { y: [0, -8, 0] }
                }
                transition={opened ? { duration: 0.8 } : { repeat: Infinity, duration: 1.6 }}
            >
                🎁
            </motion.button>

            {!opened && <p className="mt-10 text-sm text-blush/70">Ketuk kotaknya</p>}
        </motion.div>
    );
}