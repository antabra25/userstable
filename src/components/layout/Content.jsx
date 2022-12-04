import {Box, Typography, styled} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import useFetchUsers from "../../hooks/useFetchUsers.js";
import UserTable from "../users/UserTable.jsx";

const ContentStyled = styled(Box)(({theme}) => ({
    minHeight: '100vh',
    maxWidth: '100%',
}));

const Content = () => {

    const {users, loading, error} = useFetchUsers();

    const Loading = () => {
        return (

            <Box sx={{
                display: 'flex',
                flexFlow: 'column nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                rowGap: '1rem'
            }}>
                <Typography variant="h3" component="h3" color="primary.main">Loading ....</Typography>
                <CircularProgress/>
            </Box>
        )
    }

    return (
        <ContentStyled flex={4}>
            {
                loading ? <Loading/> : <UserTable users={users}/>
            }
        </ContentStyled>
    )
}
export default Content;