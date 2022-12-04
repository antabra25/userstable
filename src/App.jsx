import {ThemeProvider} from '@mui/material'
import LayOut from "./components/layout/LayOut.jsx";
import {createTheme} from '@mui/material'


export const theme =createTheme ({
    palette: {
        type: 'light',
        primary: {
            main: '#004d40',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#e8f5e9'
        },
        paper: {
            default: '#ffffff'
        }
    },
});

function App() {
    return (
        < ThemeProvider theme={theme}>
            <LayOut/>
        </ThemeProvider>
    )
}

export default App
