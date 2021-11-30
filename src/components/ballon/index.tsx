import React from "react";
import { TooltipCard, TooltipText, TooltipBox } from "./style";

const Ballon = ({ children, toolTipText }) => (
  <TooltipCard>
    <TooltipText>{children}</TooltipText>
    <TooltipBox>{toolTipText}</TooltipBox>
  </TooltipCard>
);

export default Ballon;
