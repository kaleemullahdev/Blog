import React from "react";
import { Helmet } from "react-helmet";

export const RootLayout: React.FC = ({ children }) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Helmet>
    {children}
  </>
);
