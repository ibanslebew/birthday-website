import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { content } from "../../data/content";
import { useAudio } from "../../context/AudioContext";

function formatTime(sec) {
    if (!sec || isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function MusicSection() {
    const [current, setCurrent] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    const song = content.songs[current];
    const { pauseBackground, resumeBackground } = useAudio();

    useEffect(() => {
        if (isPlaying) {
            pauseBackground();
        } else {
            resumeBackground();
        }
    }, [isPlaying]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play();
        }
    }, [current]);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleNext = () => {
        setCurrent((i) => (i + 1) % content.songs.length);
        setIsPlaying(true);
    };

    const handlePrev = () => {
        setCurrent((i) => (i - 1 + content.songs.length) % content.songs.length);
        setIsPlaying(true);
    };

    const handleTimeUpdate = () => {
        setProgress(audioRef.current.currentTime);
        setDuration(audioRef.current.duration || 0);
    };

    const handleSeek = (e) => {
        const value = Number(e.target.value);
        audioRef.current.currentTime = value;
        setProgress(value);
    };

    const selectSong = (i) => {
        setCurrent(i);
        setIsPlaying(true);
    };

    return (
        <section className="min-h-screen px-6 py-24 flex flex-col items-center">
            <audio
                ref={audioRef}
                src={song.src}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleTimeUpdate}
                onEnded={handleNext}
            />

            <motion.div
                className="w-full max-w-sm bg-blush/10 border border-blush/20 rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="w-24 h-24 mx-auto mb-4 rounded-full bg-blush/30 flex items-center justify-center text-3xl"
                    animate={isPlaying ? { rotate: 360 } : {}}
                    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                >
                    🎵
                </motion.div>

                <p className="font-display text-xl">{song.title}</p>
                <p className="text-sm text-blush/60 mt-1">{song.artist}</p>

                <input
                    type="range"
                    min={0}
                    max={duration || 0}
                    value={progress}
                    onChange={handleSeek}
                    className="w-full mt-6 accent-blush"
                />
                <div className="flex justify-between text-xs text-blush/50 mt-1">
                    <span>{formatTime(progress)}</span>
                    <span>{formatTime(duration)}</span>
                </div>

                <div className="flex items-center justify-center gap-6 mt-6">
                    <button onClick={handlePrev} className="text-2xl active:scale-90 transition">
                        ⏮
                    </button>
                    <button
                        onClick={togglePlay}
                        className="w-14 h-14 rounded-full bg-blush text-maroon-950 flex items-center justify-center text-xl active:scale-90 transition"
                    >
                        {isPlaying ? "⏸" : "▶"}
                    </button>
                    <button onClick={handleNext} className="text-2xl active:scale-90 transition">
                        ⏭
                    </button>
                </div>
            </motion.div>

            <div className="w-full max-w-sm mt-8 flex flex-col gap-3">
                {content.songs.map((s, i) => (
                    <button
                        key={i}
                        onClick={() => selectSong(i)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-left transition ${i === current ? "bg-blush/20 border border-blush/40" : "bg-blush/5"
                            }`}
                    >
                        <div>
                            <p className="text-sm">{s.title}</p>
                            <p className="text-xs text-blush/50">{s.artist}</p>
                        </div>
                        <span className="text-lg">{i === current && isPlaying ? "🎶" : "♪"}</span>
                    </button>
                ))}
            </div>
        </section>
    );
}