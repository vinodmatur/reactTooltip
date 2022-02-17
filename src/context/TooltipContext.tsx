import React, { createContext, useState } from "react";

export type ContextProps = {
  show: boolean;
  setShow: (value: boolean) => any;
  top: number;
  setTop: (value: number) => any;
  left: number;
  setLeft: (value: number) => any;
  content: string;
  setContent: (value: string) => any;
};

type TooltipProviderProps = {
  children: any;
};

export const TooltipContext = createContext<ContextProps>({} as ContextProps);

function ToolTipProvider({ children }: TooltipProviderProps) {
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [content, setContent] = useState("");

  return (
    <TooltipContext.Provider
      value={{ show, setShow, top, setTop, left, setLeft, content, setContent }}
    >
      {children}
    </TooltipContext.Provider>
  );
}

export default ToolTipProvider;
