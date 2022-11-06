import React from "react";

interface LayoutProps {
  children: JSX.Element;
}

const LayoutComponent = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>
        {`
          .container {
            padding: 5rem 0 0 10rem;
          }
        `}
      </style>
    </>
  );
};

export default LayoutComponent;
