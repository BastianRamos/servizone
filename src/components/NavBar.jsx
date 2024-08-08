import {
    useEffect,
    useState
} from 'react';

import {
    Box,
    Toolbar,
    AppBar,
    Grid,
    Button,
    Fade
} from '@mui/material';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import {
    DrawerMenu,
    DesktopMenu
} from '../components'

const URL_WHATSAPP = 'https://wa.me/+56996181785'

const isMobile = window.matchMedia("only screen and (max-width: 820px)").matches


export const NavBar = () => {

    const [isPastDistance, setIsPastDistance] = useState(false)
    const distanceFromTop = 500

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setIsPastDistance(scrollPosition >= distanceFromTop)
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Box mb={8}>
            <AppBar
                position="fixed"
                sx={{ boxShadow: 'none' }}
                color={!isMobile && !isPastDistance ? "inherit" : "primary"}
            >
                <nav aria-label="Menú de navegación">
                    <Toolbar variant="regular">
                        <Grid container>
                            <Grid
                                item
                                xs={7}
                                sm={9}
                            >
                                {isMobile
                                    ? <DrawerMenu />
                                    : <DesktopMenu />
                                }
                            </Grid>

                            <Grid
                                item
                                xs={5}
                                sm={3}
                                display="flex"
                                justifyContent="right"
                                alignItems="center"
                            >
                                <Fade
                                    in={true}
                                    timeout={isMobile ? 30000 : 6000}
                                >
                                    <Button
                                        variant="contained"
                                        color="success"
                                        sx={{ backgroundColor: "#04B300" }}
                                        startIcon={<WhatsAppIcon />}
                                        href={URL_WHATSAPP}
                                        target="_blank"
                                    >
                                        WhatsApp
                                    </Button>
                                </Fade>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </nav>
            </AppBar>
        </Box>
    )
}
