import React from "react";
import Grid from "@material-ui/core/Grid";
import { MainLayout } from "../components";

const Index: React.FC = () => {
  return (
    <MainLayout title={"Kaleem Ullah"}>
      <Grid container direction="row" justify="center">
        <Grid
          item
          xs={12}
          sm={9}
          direction="row"
          justify="space-between"
          alignItems="center"
        ></Grid>
      </Grid>
    </MainLayout>
  );
};

export default Index;
