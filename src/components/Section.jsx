import {
    Box,
    Fade,
    Typography
} from "@mui/material"

import {
    useEffect,
    useState
} from "react"

import { Link } from "react-scroll"


export const Section = ({
    texto,
    colorFondo = "#1E90FF",
    colorTexto = "#ffffff",
    side = "left",
    mt = 12,
    linkTo,
}) => {

    const boxStyle = {
        backgroundColor: colorFondo,
        marginTop: mt,
        marginBottom: 1,
        marginLeft: side === 'left' ? 0 : '48vw',
        marginRight: side === 'left' ? '48vw' : 0,
        paddingX: 1,
        height: 50,
        display: 'flex',
        justifyContent: side === 'left' ? 'right' : 'left',
        alignItems: 'center',
        cursor: 'pointer',
    }

    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(true)
    }, [])

    return (
        <Fade
            in={active}
            timeout={4000}
        >
            <Box
                sx={boxStyle}
                id="section"
            >
                <Link
                    activeClass="active"
                    to={linkTo}
                    spy
                    smooth={true}
                    duration={500}
                    delay={100}
                    offset={-140}
                >
                    <Typography
                        className="semiBold"
                        color={colorTexto}
                        fontSize={'large'}
                    >
                        {texto}
                    </Typography>
                </Link>
            </Box>
        </Fade>
    )
}