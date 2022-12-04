import {Box, Typography, Paper} from "@mui/material"

const SideBar = () => {


    return (
        <Box flex={1} sx={{
            bgcolor: 'background.paper',
            borderRadius: '0.5rem',
            marginLeft: '1rem',
        }}>
            <Paper elevation="6" sx={{
                backgroundColor: 'paper.default',
                width: '100%',
                height: '100%'
            }}>

            </Paper>
        </Box>
    )
}

export default SideBar;