import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#7875FC",
  dark: "#111115",
  dark50: "#6D6D6D",
  dark10: "#DFDFDF",
  white: "#FFFFFF",
  transparent: "transparent",
};

export const SIZES = {
  // global sizes
  base: 8,
  basePadding: 16,
  padding: 12,
  iconSize: 24,

  // font sizes
  h1: 25,
  h2: 22,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  h1: { fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontSize: SIZES.h2, lineHeight: 30 },

  labelXS: { fontSize: 12, lineHeight: 14 },
  labelXSM: { fontSize: 12, lineHeight: 14, fontFamily: "SecondaryMedium" },

  labelS: { fontSize: 14, lineHeight: 16 },
  labelSM: { fontSize: 14, lineHeight: 16, fontFamily: "SecondaryMedium" },

  labelM: { fontSize: 16, lineHeight: 20 },
  labelMM: { fontSize: 16, lineHeight: 20, fontFamily: "SecondaryMedium" },

  labelL: { fontSize: 18, lineHeight: 24 },
  labelLM: { fontSize: 18, lineHeight: 24, fontFamily: "SecondaryMedium" },
};

export const BUTTON = {
  primary: {
    padding: SIZES.padding,
    backgroundColor: COLORS.dark,
    borderRadius: 5,
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  secondary: {
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    borderColor: COLORS.dark10,
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
};
export const BUTTONTEXT = {
  primary: {
    color: COLORS.white,
    ...FONTS.labelMM,
    fontFamily: "SecondaryBold",
  },
  secondary: {
    color: COLORS.dark,
    ...FONTS.labelMM,
    fontFamily: "SecondaryBold",
  },
};
export const INPUT = {
  primary: {
    height: 54,
    marginBottom: SIZES.padding * 1.5,
    borderWidth: 1,
    borderColor: "#F3F2F2",
    borderStyle: "solid",
    borderRadius: 6,
    backgroundColor: "#FBFBFB",
    paddingHorizontal: SIZES.padding * 2,
    ...FONTS.labelMM,
  },
};

export const CONTAINER = {
    main: {
        flex: 1,
        backgroundColor: COLORS.white
    }
}

const appTheme = {
  COLORS,
  FONTS,
  BUTTON,
  BUTTONTEXT,
  INPUT,
  CONTAINER
};

export default appTheme;
