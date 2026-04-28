/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SplashScreen from "./components/SplashScreen";
import Hero from "./components/Hero";
import Promise from "./components/Promise";
import ImageBreak from "./components/ImageBreak";
import WhatWeBuild from "./components/WhatWeBuild";
import Team from "./components/Team";
import GetInvolved from "./components/GetInvolved";
import Footer from "./components/Footer";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div key="splash">
            <SplashScreen onComplete={() => setShowSplash(false)} />
          </motion.div>
        ) : (
          <motion.div key="content" className="bg-white">
            <Hero />
            <Promise />
            <ImageBreak />
            <WhatWeBuild />
            <Team />
            <GetInvolved />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
