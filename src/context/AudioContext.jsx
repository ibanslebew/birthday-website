import { createContext, useContext, useRef } from "react";
import { content } from "../data/content";

const AudioCtx = createContext(null);

export function AudioProvider({ children }) {
    const bgRef = useRef(null);
    const clickRef = useRef(null);
    const pausedByMusicSection = useRef(false);

    const startBackground = () => {
        if (bgRef.current) {
            bgRef.current.volume = 0.4;
            bgRef.current.play().catch(() => { });
        }
    };

    const playClick = () => {
        if (clickRef.current) {
            clickRef.current.currentTime = 0;
            clickRef.current.play().catch(() => { });
        }
    };

    const pauseBackground = () => {
        pausedByMusicSection.current = true;
        bgRef.current?.pause();
    };

    const resumeBackground = () => {
        if (pausedByMusicSection.current) {
            bgRef.current?.play().catch(() => { });
            pausedByMusicSection.current = false;
        }
    };

    return (
        <AudioCtx.Provider
            value={{ startBackground, playClick, pauseBackground, resumeBackground }}
        >
            <audio ref={bgRef} src={content.backgroundMusic} loop />
            <audio ref={clickRef} src={content.clickSound} />
            {children}
        </AudioCtx.Provider>
    );
}

export function useAudio() {
    return useContext(AudioCtx);
}