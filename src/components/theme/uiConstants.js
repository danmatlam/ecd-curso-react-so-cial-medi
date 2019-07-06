// import ecudevsLogo from "./images/logos/ecudevs.png";
// import screenshot1 from "./images/cursos/screenshot1.png";
// import screenshot2 from "./images/cursos/screenshot1.png";


const colors = {
    primary: '#FF5A5F',
    secondary: '#00A699',
    dark: '#000',
    midDark: '#353535',
    lightDark: '#919094',
    blueDark: '#3E4A63',

    white: '#ffffff',
    success: 'green',
    warning: 'orange',
    danger: 'red',
}

const screens = {
    small: {
        from: "0px",
        to: "768px"
    },
    medium: {
        from: "768px",
        to: "4000px"
    }
}


const fonts = {
    menu: "Lato, sans-serif;",
    fontSizes: {
        menu: "1.2em",
        h1: "2em"
    }
}

const images = {
    // logo: ecudevsLogo,
    // screenshot1: screenshot1,
    // screenshot2: screenshot2
}

const helpers = {
    center: `
        display:flex;
        align-items: center;
        justify-content: center;
    `,

    centerHorizontal: `
        display:flex;
        justify-content: center;
    `
}



export { screens, colors, fonts, images, helpers }