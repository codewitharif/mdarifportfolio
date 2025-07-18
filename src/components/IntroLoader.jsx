import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export default function IntroLoader({ onComplete }) {
  const [show, setShow] = useState(true);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    if (typingDone) {
      const timer = setTimeout(() => {
        setShow(false);
        onComplete();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [typingDone, onComplete]);

  if (!show) return null;

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <motion.div
        className="text-6xl md:text-8xl font-bold"
        style={{
          fontFamily: "'Dancing Script', cursive",
          backgroundImage: "linear-gradient(to right, #60a5fa, #9333ea)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typewriter
          options={{
            strings: ["Md Arif"],
            autoStart: true,
            delay: 150,
            cursor: "",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Md Arif")
              .callFunction(() => setTypingDone(true))
              .start();
          }}
        />
      </motion.div>
    </div>
  );
}
