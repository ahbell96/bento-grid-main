import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <div
      className="container mx-auto p-4 min-h-screen"
      style={{ backgroundColor: "#F0F0F0" }}
    >
      {children}
    </div>
  );
};

export default Container;
