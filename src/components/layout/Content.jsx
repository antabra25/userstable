import {Box, Typography, styled} from '@mui/material'


const ContentStyled = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.secondary.main,
    minHeight: '100vh',
    maxWidth: '100%',
}));


const Content = () => {

    return (
        <ContentStyled flex={4}>

            <Typography component='h1' variant="h4">Hola</Typography>

        </ContentStyled>


    )

}
export default Content;