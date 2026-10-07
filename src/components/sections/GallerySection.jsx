import { useState } from "react";
import { motion } from "framer-motion";
import { content } from "../../data/content";
import PhotoPopup from "../PhotoPopup";

function pseudoOffset(i) {
    const seedX = Math.sin(i * 12.9898) * 43758.5453;
    const seedR = Math.sin(i * 78.233) * 12345.678;
    const x = (seedX - Math.floor(seedX)) * 60 - 30;
    const r = (seedR - Math.floor(seedR)) * 16 - 8;
    return { x, r };
}

export default function GallerySection() {
    const [selected, setSelected] = useState(null);

    return (
        <section className="min-h-screen px-6 py-24 flex flex-col items-center">
            <h2 className="font-display text-2xl mb-14 text-center">Kenangan Kita</h2>

            <div className="flex flex-col items-center gap-10 w-full max-w-sm">
                {content.photos.map((photo, i) => {
                    const { x, r } = pseudoOffset(i);
                    return (
                        <motion.button
                            key={i}
                            onClick={() => setSelected(photo)}
                            className="bg-white p-2 pb-6 rounded-sm shadow-lg w-56"
                            style={{ transform: `translateX(${x}px) rotate(${r}deg)` }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={photo.src} alt={photo.caption} className="w-full h-40 object-cover" />
                            <p className="text-maroon-950 text-xs font-display italic mt-2 text-center">
                                {photo.caption}
                            </p>
                        </motion.button>
                    );
                })}
            </div>

            <PhotoPopup photo={selected} onClose={() => setSelected(null)} />
        </section>
    );
}