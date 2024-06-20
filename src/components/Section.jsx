import { Box, Fade, Typography } from "@mui/material"
import { useEffect, useState } from "react"


export const Section = ({ texto, colorFondo = '#1E90FF', colorTexto = '#ffffff', side = 'left' }) => {

    const boxStyle = {
        backgroundColor: colorFondo,
        marginTop: 12,
        marginBottom: 6,
        marginLeft: side === 'left' ? 0 : '36vw',
        marginRight: side === 'left' ? '36vw' : 0,
        paddingX: 1,
        height: 50,
        display: 'flex',
        justifyContent: side === 'left' ? 'right' : 'left',
        alignItems: 'center'
    }

    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(true)
    }, [])


    return (
        <Fade in={active} timeout={6000}>
            <Box sx={boxStyle} id="section">
                <Typography color={colorTexto} fontSize={'large'} >
                    {texto}
                </Typography>
            </Box>
        </Fade>
    )
}