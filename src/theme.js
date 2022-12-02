import {createTheme} from "@mui/material";
import {teal,grey} from "@mui/material/colors";


export const theme = createTheme({
    palette: {
        primary: {
            main: teal[500],
            light: "#c6dabfff"
        },
        secondary: {
            main: grey[900],
        },
        success: {
            main: teal[700],
        },
        warning: {
            main: teal[800]
        },
        info: {
            main: teal[900]
        }

    }
})

export default theme;