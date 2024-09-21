import { Box, Typography } from "@mui/material"

import {
    WorkImages,
    Section
} from "../components"

import { WorkVideos } from "./WorkVideos"

const blueBox = { backgroundColor: "#0071DB", borderRadius: "0 0 1rem 1rem", p: .5, mx: .5 }


export const WorkDone = ({ isMobile }) => {
    return (
        <section
            aria-label="Imagenes de trabajos realizados"
            id="trabajos"
            style={{ paddingTop: 10 }}
        >
            <Section
                key="trabajos"
                texto="Algunos Trabajos"
                colorFondo="#FF621E"
                linkTo='trabajos'
            />

            <Box sx={blueBox}>
                <Typography
                    variant="subtitle1"
                    color="#FFFFFF"
                    textAlign="center"
                >
                    Tendrás garantía y repuestos de calidad
                </Typography>
            </Box>

            <WorkImages isMobile={isMobile} />

            <Box sx={blueBox}>
                <Typography
                    variant="subtitle1"
                    color="#FFFFFF"
                    textAlign="center"
                >
                    Sin marcas ni daños al manipular tu equipo
                </Typography>
            </Box>
            <WorkVideos />
        </section>
    )
}
