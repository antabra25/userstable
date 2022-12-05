import {Box, Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
    return (

        <Box sx={{
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '70vh',
            rowGap: '1rem'
        }}>
            <Typography variant="h3" component="h3" color="primary.main">Loading ....</Typography>
            <CircularProgress/>
        </Box>
    )
}

export default Loading;