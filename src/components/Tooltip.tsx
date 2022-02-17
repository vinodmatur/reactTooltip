import { createPortal } from "react-dom";
import styled from "styled-components";
import useTooltip from "../hooks/useTooltip";

function Tooltip() {
  const portalRef = document.getElementById("portal") as HTMLElement;
  const { isTooltipVisible, top, left, content } = useTooltip();

  return createPortal(
    isTooltipVisible ? (
      <StyledTooltipContainer top={top} left={left}>
        <div className="content">{content}</div>
      </StyledTooltipContainer>
    ) : null,
    portalRef
  );
}

interface StyledTooltipContainerProps {
  readonly top?: number;
  readonly left?: number;
}

const StyledTooltipContainer = styled.div<StyledTooltipContainerProps>`
  position: absolute;
  top: ${({ top }) => top || 0}px;
  left: ${({ left }) => left || 0}px;
  width: 100px;
  height: 50px;
  background: #282727;
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px;

    &::after {
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 8px solid #282727;
      bottom: -8px;
      left: 0;
    }
  }
`;

export default Tooltip;
