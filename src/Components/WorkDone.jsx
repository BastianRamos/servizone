import { Box } from "@mui/material"
import { Carrousel } from "./Carrousel"
import { Section } from "./Section"


export const WorkDone = () => {
    return (
        <Box className='marginForDesktop'>
            <Section
                key='trabajos'
                texto='Trabajos Realizados'
                colorFondo="#FF621E"
            />
            <Carrousel/>
        </Box>
    )
}
