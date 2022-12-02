import {Stack, Box, styled} from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
const FooterStyled = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.info.main,
    height: '160px',

}))

const Footer = () => {
    return (
        <FooterStyled>
            <Stack direction="column" justifyContent="center" spacing={1}>
                <Box>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                    <YouTubeIcon/>
                </Box>

            </Stack>
        </FooterStyled>
    )

}

export default Footer;