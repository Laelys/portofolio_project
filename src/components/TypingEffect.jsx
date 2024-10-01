import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const TypingEffect = ({ text, duration }) => {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    const totalChars = text.length;
    let charIndex = 0;

    const timer = setInterval(() => {
      // Slice the text based on charIndex
      setVisibleText(text.slice(0, charIndex + 1));
      charIndex++;

      // Stop when we reach the end of the string
      if (charIndex >= totalChars) {
        clearInterval(timer);
      }
    }, (duration * 1000) / totalChars);

    // Cleanup function to reset on unmount or text change
    return () => {
      clearInterval(timer);
      setVisibleText(""); // Clear the text when switching content
    };
  }, [text, duration]);

  return (
    <div className="typing__effect__container">
      <p className="typing__effect__text">{visibleText}</p>
    </div>
  );
};

TypingEffect.propTypes = {
  text: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default TypingEffect;
