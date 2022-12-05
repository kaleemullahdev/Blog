import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { graphql } from "gatsby";
import styled from "styled-components";
import { MainLayout } from "../../components";

//eslint-disable-next-line @typescript-eslint/no-var-requires
const moment = require("moment");

const CardStyle = styled(Card)`
  min-width: 275;
  margin: 1.5rem;
  box-shadow: none;
`;

const CardShortDesc = styled.p`
  min-width: 275;
  margin-bottom: 1.5rem;
  box-shadow: none;
`;
const CardSmall = styled.small`
  color: ${({ theme }) => theme.text.clr2};
  margin-bottom: 12;
  margin-top: 4;
`;
const CardTitle = styled.h3`
  font-size: 1.55rem;
  margin-bottom: 0.4375rem;
  font-weight: 700;
  font-family: Montserrat, sans-serif;
  cursor: pointer;
  width: fit-content;
`;
interface Props {
  data: any;
}
const SinglePost: React.FC<Props> = ({ data }: any) => {
  const { article } = data.eablog;
  return (
    <MainLayout title={article.title}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid
          item
          sm={9}
          direction="row"
          justify="center"
          alignItems="center"
          alignSelf="center"
        >
          <CardStyle>
            <CardContent>
              <CardTitle>{article.title}</CardTitle>
              <CardSmall>
                {moment()
                  .utc(new Date(article.created_at).getTime())
                  .format("MMMM Do YYYY")}{" "}
                ☕ {article.minRead}
              </CardSmall>
              <CardShortDesc>
                {article.description && article.description.substring(0, 30)}
              </CardShortDesc>
            </CardContent>
          </CardStyle>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export const query = graphql`
  query($_id: ID!) {
    eablog {
      article(_id: $_id) {
        _id
        created_at
        description
        footerLinks
        minRead
        title
      }
    }
  }
`;

export default SinglePost;
