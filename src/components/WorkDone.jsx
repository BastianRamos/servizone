import { Box } from "@mui/material"
import { WorkImages, Section } from "/src/components"

const isMobile = window.matchMedia('only screen and (max-width: 768px)').matches;


export const WorkDone = () => {
    return (
        <Box className='marginForDesktop' id='trabajos'>
            <Section
                key='trabajos'
                texto='Trabajos Realizados'
                colorFondo="#FF621E"
            />
            <WorkImages />
        </Box>
    )
}
