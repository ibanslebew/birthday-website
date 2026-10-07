import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import PinScreen from "./components/PinScreen";
import GiftBoxScreen from "./components/GiftBoxScreen";
import LandingPage from "./components/LandingPage";
import FallingFlowers from "./components/FallingFlowers";

const STAGES = ["loading", "pin", "gift", "landing"];

export default function App() {
  const [stageIndex, setStageIndex] = useState(0);
  const stage = STAGES[stageIndex];
  const next = () => setStageIndex((i) => Math.min(i + 1, STAGES.length - 1));

  return (
    <div className="relative min-h-screen overflow-hidden">
      <FallingFlowers />
      <AnimatePresence mode="wait">
        {stage === "loading" && <LoadingScreen key="loading" onNext={next} />}
        {stage === "pin" && <PinScreen key="pin" onNext={next} />}
        {stage === "gift" && <GiftBoxScreen key="gift" onNext={next} />}
        {stage === "landing" && <LandingPage key="landing" />}
      </AnimatePresence>
    </div>
  );
}