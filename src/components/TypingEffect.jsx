import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const TypingEffect = ({ text = "", duration, maxLength }) => {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    // Ensure text is defined and has length
    if (!text || text.length === 0) return;

    const totalChars = text.length;
    let charIndex = 0;

    // Set a fixed typing speed based on the maxLength (longest string)
    const intervalSpeed = (duration * 1000) / maxLength;

    const timer = setInterval(() => {
      setVisibleText(text.slice(0, charIndex + 1));
      charIndex++;

      if (charIndex >= totalChars) {
        clearInterval(timer);
      }
    }, intervalSpeed);

    return () => {
      clearInterval(timer);
      setVisibleText(""); // Clear the text when switching content
    };
  }, [text, duration, maxLength]);

  return (
    <div className="typing__effect__container">
      <p className="typing__effect__text">{visibleText}</p>
    </div>
  );
};

TypingEffect.propTypes = {
  text: PropTypes.string,
  duration: PropTypes.number.isRequired,
  maxLength: PropTypes.number.isRequired, // Add maxLength as a required prop
};

export default TypingEffect;
