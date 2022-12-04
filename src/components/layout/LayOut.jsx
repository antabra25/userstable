import Content from "./Content";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import {Stack, Box} from "@mui/material"

const LayOut = () => {
    return (
        <Box sx={{
            backgroundColor: 'background.default'
        }}>
            <NavBar/>
            <Stack direction="row" justifyContent="space-between" spacing={1}
                   sx={{marginTop: '0.5rem', paddingBottom: '1rem'}}>
                <SideBar/>
                <Content/>
            </Stack>
            <Footer/>
        </Box>

    )
}

export default LayOut;