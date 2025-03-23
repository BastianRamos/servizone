import {
    Box,
    Grid,
    IconButton,
    Typography
} from "@mui/material"

import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"

const boxImgStyle = {
    backgroundImage: `url('/computador-footer.webp')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const boxColorStyle = {
    height: 340,
    marginTop: .1,
    textAlign: 'center',
    alignContent: 'center',
    color: '#ffffff',
    backgroundColor: 'rgba(30, 144, 255, .7)'
}

const URL_FACEBOOK = "https://www.facebook.com/profile.php?id=61557674667228&locale=es_LA"
const URL_INSTAGRAM = "https://www.instagram.com/servizone.cl/"


export const Footer = () => {
    return (
        <footer role="contentinfo">
            <Box sx={boxImgStyle}>
                <Box sx={boxColorStyle}>
                    <Grid container>
                        <Grid
                            item
                            xs={12}
                            md={3}
                            textAlign="center"
                            py={3}
                        >
                            <Typography variant="overline">
                                Información de contacto:
                            </Typography>

                            <Typography variant="body2">
                                +569 9618 1785
                            </Typography>

                            <Typography variant="body2">
                                servizone.cl@gmail.com
                            </Typography>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <PinDropOutlinedIcon />

                            <Typography
                                variant="body2"
                            >
                                El Samaritano Cinco, Maipú
                            </Typography>

                            <Typography
                                variant="body2"
                                mt={1}
                            >
                                @2024 SERVIZONE hardware & software
                            </Typography>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            md={3}
                            py={3}
                        >
                            <Typography variant="overline">
                                Redes sociales:
                            </Typography>

                            <Box>
                                <IconButton
                                    color="inherit"
                                    href={URL_FACEBOOK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="ir a facebook"
                                >
                                    <FacebookIcon />
                                </IconButton>

                                <IconButton
                                    color="inherit"
                                    href={URL_INSTAGRAM}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="ir a instagram"
                                >
                                    <InstagramIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Box>
        </footer>
    )
}
