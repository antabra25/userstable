import {Stack, Box, Divider, styled, Typography} from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterStyled = styled(Box)(({theme}) => ({
    height: '160px',

}))

const Footer = () => {
    return (
        <FooterStyled>
            <Divider variant="middle"/>
            <Stack sx={{
                display:'flex',
                flexFlow:'column nowrap',
                justifyContent:'center',
                alignItems:'center',
                height:'100%'
            }}>
                <Box>
                    <FacebookIcon color="primary" fontSize="medium"/>
                    <TwitterIcon color="primary" fontSize="medium"/>
                    <InstagramIcon color="primary" fontSize="medium"/>
                    <YouTubeIcon color="primary" fontSize="medium"/>
                </Box>

                <Typography variant="body2" color="text.secondary">
                    © 2022 UsersTable. All rights reserved.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Design by Anthony Mujica
                </Typography>

            </Stack>
        </FooterStyled>
    )

}

export default Footer;