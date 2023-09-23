import React, { ReactNode } from "react";

const StyledP: React.FC<{ children: ReactNode }> = ({ children }) => (
  <p className="StyledP">{children}</p>
);

export default StyledP;
