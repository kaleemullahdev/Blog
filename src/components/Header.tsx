import React from "react";
import { Link, navigate } from "gatsby";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Toggle from "react-toggle";
import { useAppContext } from "../hooks";
import styled from "styled-components";
import "react-toggle/style.css";
import "../css/header-comp.css";

const Title = styled(Link)`
  font-family: Montserrat;
  display: inline;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  text-decoration: none;
  color: ${({ theme }) => theme.link.clrWhite};
`;
const RightMenu = styled.div`
  font-family: Montserrat;
  display: inline;
`;
const HeaderRoot = styled.div`
  min-height: 64px;
  height: 64px;
  width: 100%;
  background-color: ${({ theme }) => theme.primary.main};
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 10px #888;
`;
const SwitchStyles = styled.div`
  display: inline-block;
  verticalalign: middle;
  marginleft: 4;
`;
const HeaderBtn = styled(Button)`
  font-size: 1.1rem;
  font-weight: 500;
  font-family: Montserrat;
  color: ${({ theme }) => theme.link.clrWhite};
`;
interface Props {
  siteTitle: string;
}
export const Header: React.FC<Props> = ({ siteTitle }) => {
  const { darkMode, setDarkMode } = useAppContext();
  const handleChange = (_: any) => {
    setDarkMode(!darkMode);
  };
  return (
    <HeaderRoot>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Title to="/">{siteTitle}</Title>
        </Grid>
        <Grid item>
          <RightMenu>
            <Hidden xsDown>
              <HeaderBtn onClick={() => navigate("/blog")}>Blog</HeaderBtn>

              <HeaderBtn onClick={() => navigate("/#about")}>About</HeaderBtn>
            </Hidden>
            <SwitchStyles>
              <Toggle
                defaultChecked={darkMode}
                className="custom-classname"
                icons={{
                  checked: (
                    <NightsStayIcon
                      style={{
                        fontSize: 16,
                        alignSelf: "center",
                        color: "yellow",
                      }}
                    />
                  ),
                  unchecked: (
                    <WbSunnyIcon
                      style={{
                        fontSize: 16,
                        alignSelf: "center",
                        color: "yellow",
                      }}
                    />
                  ),
                }}
                onChange={handleChange}
                aria-labelledby="switch"
              />
            </SwitchStyles>
          </RightMenu>
        </Grid>
      </Grid>
    </HeaderRoot>
  );
};
