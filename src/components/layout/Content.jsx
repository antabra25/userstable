import Users from '../users/Users.jsx'
import {Box, Typography, styled} from '@mui/material'


const ContentStyled = styled(Box)(({theme}) => ({
    minHeight: '100vh',
    maxWidth: '100%',
}));

const Content = () => {
    return (
        <ContentStyled flex={4}>
            <Users/>
        </ContentStyled>
    )
}
export default Content;