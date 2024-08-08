import {
    Box,
    Fade,
    Typography
} from "@mui/material"

import {
    useEffect,
    useState
} from "react"


export const Section = ({
    texto,
    colorFondo = "#1E90FF",
    colorTexto = "#ffffff",
    side = "left",
    mt = 12
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
                <Typography
                    className="semiBold"
                    color={colorTexto}
                    fontSize={'large'}
                >
                    {texto}
                </Typography>
            </Box>
        </Fade>
    )
}