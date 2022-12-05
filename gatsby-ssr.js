/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import "./src/css/index.css";
import React from "react";
import { AppProvider, RootLayout } from "./src/components";

// Instantiating store in `wrapRootElement` handler ensures:
//  - there is fresh store for each SSR page
//  - it will be called only once in browser, when React mounts
export const wrapRootElement = ({ element }) => (
  <RootLayout>
    <AppProvider>{element}</AppProvider>
  </RootLayout>
);
