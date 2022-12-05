import React from "react";
import { navigate, graphql } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";
import { MainLayout } from "../components";

//eslint-disable-next-line @typescript-eslint/no-var-requires
const moment = require("moment");

const Author = styled.span`
  color: ${({ theme }) => theme.link.clr1};
  text-decoration: underline;
`;
const AboutAuthor = styled.p`
  color: ${({ theme }) => theme.text.clr2};
  font-size: 100%;
  letter-spacing: 0.4;
`;
const CardStyle = styled(Card)`
  min-width: 275;
  margin-bottom: 1.5rem;
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

const BLog: React.FC<Props> = ({ data }: any) => {
  const { articles } = data.eablog;
  return (
    <MainLayout title={"Blog"}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid
          item
          sm={9}
          direction="row"
          justify="center"
          alignItems="center"
          alignSelf="center"
        >
          <div
            style={{
              paddingLeft: 16,
              paddingRight: 16,
              marginTop: 26,
            }}
          >
            <AboutAuthor>
              Personal Blog by <Author>Kaleem Ullah</Author>
              <br />I want to share some ideas and want u to share too.
            </AboutAuthor>
          </div>
          {articles.map((item, key) => (
            <CardStyle key={key}>
              <CardContent>
                <CardTitle onClick={() => navigate(`/blog/${item._id}`)}>
                  {item.title}
                </CardTitle>
                <CardSmall>
                  {moment()
                    .utc(new Date(item.created_at).getTime())
                    .format("MMMM Do YYYY")}{" "}
                  ☕ {item.minRead}
                </CardSmall>
                <CardShortDesc>
                  {item.description && item.description.substring(0, 30)}
                </CardShortDesc>
              </CardContent>
            </CardStyle>
          ))}
        </Grid>
      </Grid>
    </MainLayout>
  );
};
export const query = graphql`
  query EABLOG {
    eablog {
      articles {
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
export default BLog;
