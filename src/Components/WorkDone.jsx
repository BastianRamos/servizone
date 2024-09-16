import { Typography } from "@mui/material"

import {
    WorkImages,
    Section
} from "../components"

import { WorkVideos } from "./WorkVideos"

const typographyStyle = { fontWeight: "300 !important", mt: 2 }


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

            <Typography
                variant="subtitle1"
                color="#FF621E"
                textAlign="center"
                sx={typographyStyle}
            >
                Tendrás garantía y repuestos de calidad
            </Typography>

            <WorkImages isMobile={isMobile} />

            <Typography
                variant="subtitle1"
                color="#FF621E"
                textAlign="center"
                sx={typographyStyle}
            >
                Sin marcas ni daños al manipular tu equipo
            </Typography>

            <WorkVideos />
        </section>
    )
}
