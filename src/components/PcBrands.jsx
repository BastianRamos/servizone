import {
    Box,
    Fade
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
            </Box>
        </section>
    )
}
