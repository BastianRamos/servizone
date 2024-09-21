import {
    Box,
    Fade,
    Slide,
    Typography
} from "@mui/material"

const isMobile = window.matchMedia("only screen and (max-width: 767px)").matches
const greenBox = { backgroundColor: "#497A00", mt: 2, mb: 8, borderRadius: "10rem 4px 10rem 4px", mx: 2 }


export const PcBrands = () => {
    return (
        <section aria-label="Logo de algunas marcas de computadoras">
            <Box
                textAlign="center"
                mt={4}
                className="marginForDesktop"
            >
                <Fade
                    in={true}
                    timeout={6000}
                >
                    <img
                        src={isMobile ? "/brands_pc.webp" : "/brands2_pc.webp"}
                        className="opacityBrands"
                        alt="Imagen de marcas de computadoras"
                        loading="eager"
                    />
                </Fade>

                <Slide
                    in={true}
                    direction="up"
                    timeout={3000}
                >
                    <Box sx={greenBox}>
                        <Typography
                            variant="h6"
                            color="#FFFFFF"
                            sx={{ fontWeight: "600 !important" }}
                            pt={4}
                            px={7}
                        >
                            DALE OTRA OPORTUNIDAD A TU EQUIPO
                        </Typography>

                        <Typography
                            variant="subtitle2"
                            color="#FFFFFF"
                            pb={4}
                            px={7}
                            pt={1}
                        >
                            Actualiza, optimiza o repara con los siguientes servicios
                        </Typography>
                    </Box>
                </Slide>
            </Box>
        </section>
    )
}
