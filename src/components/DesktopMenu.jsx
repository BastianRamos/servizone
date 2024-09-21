import {
    Box,
    Button,
    Grow,
    IconButton
} from "@mui/material"

import { Link } from "react-scroll"

import { Ubication } from "./Ubication"

const styleButton = {
    mx: 2,
    '&:hover': {
        boxShadow: '0 2px #FF621E',
        backgroundColor: 'transparent',
        borderRadius: 0,
        transition: '.6s !important'
    }
}


export const DesktopMenu = () => {
    return (
        <Box>
            <Link
                activeClass="active"
                to="top"
                spy
                smooth={true}
                duration={1500}
                delay={500}
                offset={-160}
                role="button"
            >
                <Grow
                    in={true}
                    timeout={4000}
                >
                    <IconButton>
                        <img
                            src="/logos/servizone_letras.webp"
                            width={140}
                            alt="logo servizone sólo letras"
                            loading="eager"
                        />
                    </IconButton>
                </Grow>
            </Link>

            <Link
                activeClass="active"
                to="servicios"
                spy
                smooth={true}
                duration={1500}
                delay={500}
                offset={-160}
                role="button"
            >
                <Grow
                    in={true}
                    timeout={3500}
                >
                    <Button
                        color="inherit"
                        variant="text"
                        sx={styleButton}
                    >
                        Servicios
                    </Button>
                </Grow>
            </Link>

            <Link
                activeClass="active"
                to="trabajos"
                spy
                smooth={true}
                duration={1500}
                delay={500}
                offset={-40}
                role="button"
            >
                <Grow
                    in={true}
                    timeout={3000}
                >
                    <Button
                        color="inherit"
                        variant="text"
                        sx={styleButton}
                    >
                        Trabajos
                    </Button>
                </Grow>
            </Link>

            <Link
                activeClass="active"
                to="comentarios"
                spy
                smooth={true}
                duration={1500}
                delay={500}
                offset={-220}
                role="button"
            >
                <Grow
                    in={true}
                    timeout={2500}
                >
                    <Button
                        color="inherit"
                        variant="text"
                        sx={styleButton}
                    >
                        Comentarios
                    </Button>
                </Grow>
            </Link>

            <Link
                activeClass="active"
                to="contacto"
                spy
                smooth={true}
                duration={1500}
                delay={500}
                offset={-60}
                role="button"
            >
                <Grow
                    in={true}
                    timeout={2000}
                >
                    <Button
                        color="inherit"
                        variant="text"
                        sx={styleButton}
                    >
                        Contacto
                    </Button>
                </Grow>
            </Link>


            <Ubication />
        </Box>
    )
}
