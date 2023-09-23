import React, { ReactNode } from "react";

const StyledH2: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h2 className="text-xl leading-8 mb-4 md:text-xl md:leading-8 styledh2">
    {children}
  </h2>
);

export default StyledH2;
