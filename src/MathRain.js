import React, { useEffect } from "react";

const symbols = ["∫", "∑", "π", "f(x)", "lim", "α", "β", "∂", "𝒩", "ℝ"];

export default function MathRain() {
  useEffect(() => {
    const interval = setInterval(() => {
      const rain = document.createElement("span");
      rain.innerText = symbols[Math.floor(Math.random() * symbols.length)];
      rain.className = "math-rain";

      // Random style attributes
      const left = Math.random() * 100;
      const rotate = Math.random() * 360;
      const opacity = 0.3 + Math.random() * 0.4;
      const fontSize = 14 + Math.random() * 20;
      const duration = 4 + Math.random() * 4;

      rain.style.left = `${left}vw`;
      rain.style.fontSize = `${fontSize}px`;
      rain.style.opacity = `${opacity}`;
      rain.style.transform = `rotate(${rotate}deg)`;
      rain.style.animationDuration = `${duration}s`;

      document.body.appendChild(rain);

      setTimeout(() => rain.remove(), duration * 1000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
}