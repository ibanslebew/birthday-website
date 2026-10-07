import { useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onNext }) {
    useEffect(() => {
        const t = setTimeout(onNext, 2600);
        return () => clearTimeout(t);
    }, [onNext]);

    return (
        <motion.div
            className="h-screen w-screen flex flex-col items-center justify-center bg-maroon-950 text-blush px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="text-5xl"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
                🌸
            </motion.div>
            <p className="mt-6 font-display text-lg text-center">
                Menyiapkan sesuatu yang spesial untukmu...
            </p>
        </motion.div>
    );
}