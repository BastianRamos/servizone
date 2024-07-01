import { Box } from "@mui/material"

import {
    WorkImages,
    Section
} from "../components"


export const WorkDone = () => {
    return (
        <section aria-label="Imagenes de trabajos realizados">
            <Box
                className="marginForDesktop"
                id="trabajos"
                pt={10}
            >
                <Section
                    key="trabajos"
                    texto="Trabajos Realizados"
                    colorFondo="#FF621E"
                />
                <WorkImages />
            </Box>
        </section>
    )
}
