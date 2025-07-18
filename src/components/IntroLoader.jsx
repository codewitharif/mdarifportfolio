import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export default function IntroLoader({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 4000); // total time for typing + pause
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <h1
        className="text-6xl md:text-8xl font-bold"
        style={{
          fontFamily: "'Dancing Script', cursive",
          backgroundImage: "linear-gradient(to right, #60a5fa, #9333ea)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        <Typewriter
          options={{
            strings: ["Md Arif"],
            autoStart: true,
            delay: 150, // typing speed
            cursor: "", // hide blinking cursor for cleaner look
          }}
        />
      </h1>
    </div>
  );
}
