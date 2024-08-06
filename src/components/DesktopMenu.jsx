import {
    Box,
    Button,
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
                <IconButton>
                    <img
                        src='/logos/servizone_letras.webp'
                        width={140}
                        alt='logo servizone sólo letras'
                    />
                </IconButton>
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
                <Button
                    color='inherit'
                    variant='text'
                    sx={{ mx: 2 }}
                >
                    Servicios
                </Button>
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
                <Button
                    color='inherit'
                    variant='text'
                    sx={{ mx: 2 }}
                >
                    Trabajos
                </Button>
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
                <Button
                    color='inherit'
                    variant='text'
                    sx={{ mx: 2 }}
                >
                    Comentarios
                </Button>
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
                <Button
                    color='inherit'
                    variant='text'
                    sx={{ mx: 2 }}
                >
                    Contacto
                </Button>
            </Link>
        </Box>
    )
}
