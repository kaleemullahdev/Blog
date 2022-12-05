import React from "react";
import { SEO } from "../components";
import Grid from "@material-ui/core/Grid";

const NotFoundPage: React.FC = () => (
  <Grid container direction="row" justify="center">
    <Grid
      item
      xs={11}
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Grid>
  </Grid>
);

export default NotFoundPage;
