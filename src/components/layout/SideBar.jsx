import {Box,Typography,useTheme} from "@mui/material"

const SideBar = () => {

    const theme = useTheme()

    return (
        <Box flex={1} sx={{
            backgroundColor:theme.palette.primary.main,
        }}>

        </Box>
    )
}

export default SideBar;