import {
    Box,
    Button,
    Grow,
    IconButton
} from "@mui/material"

import { Link } from "react-scroll"


export const DesktopMenu = () => {
    return (
        <Box>
            <Link
                activeClass="active"
                to="top"
                spy
                smooth={true}
                duration={500}
                delay={300}
                offset={-160}
            >
                <Grow
                    in={true}
                    timeout={4000}
                >
                    <IconButton>
                        <img
                            src='/logos/servizone_letras.webp'
                            width={140}
                            alt='logo servizone sólo letras'
                        />
                    </IconButton>
                </Grow>
            </Link>

            <Link
                activeClass="active"
                to="servicios"
                spy
                smooth={true}
                duration={500}
                delay={300}
                offset={-140}
            >
                <Grow
                    in={true}
                    timeout={3500}
                >
                    <Button
                        color='inherit'
                        variant='text'
                        sx={{ mx: 2 }}
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
                duration={500}
                delay={300}
                offset={-40}
            >
                <Grow
                    in={true}
                    timeout={3000}
                >
                    <Button
                        color='inherit'
                        variant='text'
                        sx={{ mx: 2 }}
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
                duration={500}
                delay={300}
                offset={-220}
            >
                <Grow
                    in={true}
                    timeout={2500}
                >
                    <Button
                        color='inherit'
                        variant='text'
                        sx={{ mx: 2 }}
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
                duration={500}
                delay={300}
                offset={-60}
            >
                <Grow
                    in={true}
                    timeout={2000}
                >
                    <Button
                        color='inherit'
                        variant='text'
                        sx={{ mx: 2 }}
                    >
                        Contacto
                    </Button>
                </Grow>
            </Link>
        </Box>
    )
}
