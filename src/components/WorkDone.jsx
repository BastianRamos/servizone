import { Box, Typography } from "@mui/material"

import {
    WorkImages,
    Section
} from "../components"

import { WorkVideos } from "./WorkVideos"

const orangeBox = { backgroundColor: "#D13F00", borderRadius: "1rem 1rem 0 0", p: .5, mx: "auto", mt: 6 }


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

            <Box
                sx={orangeBox}
                width={isMobile ? "96vw" : "80vw"}
            >
                <Typography
                    variant="subtitle1"
                    color="#FFFFFF"
                    textAlign="center"
                >
                    Tendrás garantía y repuestos de calidad
                </Typography>
            </Box>

            <WorkImages isMobile={isMobile} />

            <Box
                sx={orangeBox}
                width={isMobile ? "90vw" : "77vw"}
            >
                <Typography
                    variant="subtitle1"
                    color="#FFFFFF"
                    textAlign="center"
                >
                    Sin marcas ni daños en tu equipo
                </Typography>
            </Box>

            <WorkVideos />
        </section>
    )
}
