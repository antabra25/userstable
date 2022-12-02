import {ThemeProvider} from '@mui/material'
import theme from "./theme.js";
import LayOut from "./components/layout/LayOut.jsx";


function App() {
    return (
        < ThemeProvider theme={theme}>
            <LayOut/>
        </ThemeProvider>
    )
}

export default App
