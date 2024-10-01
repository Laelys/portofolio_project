import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const TypingEffect = ({ text, duration }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const chars = text
      .split("")
      .map((char) => (char === " " ? "\u00A0" : char)); // Preserve spaces
    setCharacters(chars);
  }, [text]);

  return (
    <p>
      {characters.map((char, index) => (
        <span
          key={index}
          style={{
            animation: `fadeInLetter ${duration / characters.length}s linear`,
            animationDelay: `${(index / characters.length) * duration}s`,
            animationFillMode: "forwards", // Keep the letter visible after animation
            opacity: 0,
            display: "inline-block",
          }}
        >
          {char}
        </span>
      ))}
    </p>
  );
};

TypingEffect.propTypes = {
  text: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default TypingEffect;
