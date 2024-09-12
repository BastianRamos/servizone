import {
    Box,
    Fade,
    Slide,
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
        borderRadius: '1px'
    }

    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(true)
    }, [])

    return (
        <Slide
            in={active}
            timeout={5000}
            direction="left"
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
        </Slide>
    )
}