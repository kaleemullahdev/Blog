import React from "react";
import Box from "@material-ui/core/Box";
import { SEO } from "./SEO";
import { Header } from "./Header";

interface Props {
  title: string;
  children: React.ReactNode;
}
export const MainLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <Box style={{ flexGrow: 1 }}>
      <SEO title={title} />
      <Header siteTitle="Kaleem Ullah" />
      {children}
    </Box>
  );
};
