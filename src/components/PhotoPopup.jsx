import { AnimatePresence, motion } from "framer-motion";

export default function PhotoPopup({ photo, onClose }) {
    return (
        <AnimatePresence>
            {photo && (
                <motion.div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white p-3 pb-6 rounded-sm max-w-xs w-full"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={photo.src}
                            alt={photo.caption}
                            className="w-full max-h-96 object-cover"
                        />
                        <p className="text-maroon-950 text-sm font-display italic mt-3 text-center">
                            {photo.caption}
                        </p>
                        <button
                            onClick={onClose}
                            className="mt-4 mx-auto block text-xs text-maroon-950/60 underline"
                        >
                            Tutup
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}