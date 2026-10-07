import { useMemo } from "react";

const EMOJIS = ["🌸", "🌷", "💮", "🌹", "🌺"];

export default function FallingFlowers({ count = 18 }) {
    const petals = useMemo(() => {
        return Array.from({ length: count }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            duration: 8 + Math.random() * 8,
            delay: Math.random() * 10,
            size: 14 + Math.random() * 14,
            drift: (Math.random() - 0.5) * 100,
            emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        }));
    }, [count]);

    return (
        <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
            {petals.map((p) => (
                <span
                    key={p.id}
                    className="petal"
                    style={{
                        left: `${p.left}%`,
                        fontSize: `${p.size}px`,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                        "--drift": `${p.drift}px`,
                    }}
                >
                    {p.emoji}
                </span>
            ))}
        </div>
    );
}