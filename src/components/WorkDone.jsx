import { Box } from "@mui/material"
import { WorkImages, Section } from "../components"


export const WorkDone = () => {
    return (
        <Box
            className='marginForDesktop'
            id='trabajos'
        >
            <Section
                key='trabajos'
                texto='Trabajos Realizados'
                colorFondo="#FF621E"
            />
            <WorkImages />
        </Box>
    )
}
