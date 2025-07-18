import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GradientCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{ x: pos.x - 40, y: pos.y - 40 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      style={{
        position: "fixed",
        width: "80px",
        height: "80px",
        background:
          "radial-gradient(circle at center, #ff00cc, #3333ff, transparent)",
        borderRadius: "50%",
        mixBlendMode: "screen",
        pointerEvents: "none",
        filter: "blur(40px)",
        zIndex: 9999,
      }}
    />
  );
};

export default GradientCursor;
