import React, { useRef, RefObject } from "react";
import "./styles.css";
import useTooltip from "./hooks/useTooltip";
import Tooltip from "./components/Tooltip";

export default function App() {
  const { showTooltip } = useTooltip();
  const leftBtnRef = useRef<HTMLElement>();
  const rightBtnRef = useRef<HTMLElement>();

  const handleClick = (elRef: RefObject<HTMLElement>) => {
    const { y, x } = elRef.current.getBoundingClientRect();
    const elementId = elRef?.current?.id;
    showTooltip(y - 60, x, `Tooltip on the ${elementId}`);
  };

  return (
    <div className="App">
      <button
        ref={leftBtnRef}
        id="left"
        onClick={() => handleClick(leftBtnRef)}
      >
        Show the tooltip on the left
      </button>
      <button
        ref={rightBtnRef}
        id="right"
        onClick={() => handleClick(rightBtnRef)}
      >
        Show the tooltip on the right
      </button>
      <Tooltip />
    </div>
  );
}
