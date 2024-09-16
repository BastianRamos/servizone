import {
    Box,
    Fade,
    Slide,
    Typography
} from "@mui/material"

const isMobile = window.matchMedia("only screen and (max-width: 767px)").matches


export const PcBrands = () => {
    return (
        <section aria-label="Logo de algunas marcas de computadoras">
            <Box textAlign="center" >
                <Fade
                    in={true}
                    timeout={6000}
                >
                    <img
                        src={isMobile ? "/brands_pc.webp" : "/brands2_pc.webp"}
                        className="opacityBrands"
                        alt="Imagen de marcas de computadoras"
                    />
                </Fade>

                <Slide
                    in={true}
                    direction="up"
                    timeout={3000}
                >
                    <Box>
                        <Typography
                            variant="h5"
                            color="#1E90FF"
                            sx={{ fontWeight: "600 !important" }}
                            mt={2}
                        >
                            DALE OTRA OPORTUNIDAD A TU EQUIPO
                        </Typography>

                        <Typography
                            variant="subtitle2"
                            color="#1E90FF"
                            sx={{ fontWeight: "300 !important" }}
                        >
                            Actualiza, optimiza o repara con alguno de los servicios ofrecidos
                        </Typography>
                    </Box>
                </Slide>
            </Box>
        </section>
    )
}
