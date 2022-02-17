import { render } from "react-dom";
import ToolTipProvider from "./context/TooltipContext";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <ToolTipProvider>
    <App />
  </ToolTipProvider>,
  rootElement
);
