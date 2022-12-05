import { colors } from "@material-ui/core";

export interface theme {
  myColor: {
    main: string;
  };
  primary: {
    contrastText: string;
    dark: string;
    main: string;
    light: string;
  };
  text: {
    clr1: string;
    clr2: string;
  };
  link: { clr1: string; clrWhite: string };
  bgColor: {
    clr1: string;
  };
}
export const lightModeTheme: theme = {
  myColor: {
    main: colors.blue[100],
  },
  primary: {
    contrastText: colors.green[100],
    dark: colors.blue[100],
    main: "#0077b5",
    light: colors.blue[100],
  },
  text: {
    clr1: "#fff",
    clr2: "#292222",
  },
  link: {
    clr1: "#fff",
    clrWhite: "#fff",
  },
  bgColor: { clr1: "#fff" },
};

export const darkModeTheme: theme = {
  myColor: {
    main: colors.grey[800],
  },
  primary: {
    contrastText: colors.grey[800],
    dark: colors.grey[800],
    main: colors.grey[800],
    light: colors.grey[800],
  },
  text: {
    clr1: "#fff",
    clr2: "#e5e5e6",
  },
  link: {
    clr1: "red",
    clrWhite: "#fff",
  },
  bgColor: { clr1: "#282c35" },
};
