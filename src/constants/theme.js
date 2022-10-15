

export const COLORS = {
    // base colors
    primary: "#2388C7",
    inputBackground: "#f5f5f5",
    label: '#222222',
    emptyText: "#989898",
    lightGray: "#3D4548",
    gray: "#222222",
    gradient: "#D6D3DE",
    secondary: "#25282F",
    appBarColor: "#444444",

    // colors
    black: "#000000",
    white: "#FFFFFF",

};


export const SIZES = {


    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 15,
};

export const FONTS = {
    largeTitle: { fontFamily: "Roboto-regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto-Medium", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    emptyTitle: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
};

const appTheme = { COLORS, FONTS, SIZES };

export default appTheme;