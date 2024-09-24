import { Box, Typography } from "@mui/material"
import { Section } from "./Section"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

//Puntos de quiebre del carrusel de imágenes. Se puede definir cantidad de items y desplazamiento.
const responsiveCarousel = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
}

// Array con la ruta de las screenshots de cada comentario recibido.
const imgs_comments = [
    { url: "comentarios/comentario_google1.webp" },
    { url: "comentarios/comentario_google2.webp" },
    { url: "comentarios/comentario_google3.webp" },
    { url: "comentarios/comentario_google4.webp" },
    { url: "comentarios/comentario_facebook.webp" },
    { url: "comentarios/comentario2_facebook.webp" },
    { url: "comentarios/comentario_google5.webp" },
    { url: "comentarios/comentario_google6.webp" },
    { url: "comentarios/comentario_google7.webp" },
    { url: "comentarios/comentario_google8.webp" },
]

//Estilo para las imágenes dentro del carrusel.
const imgStyle = {
    borderRadius: 4,
    boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
    width: "100%"
}

const blueBox = { backgroundColor: "#0071DB", borderRadius: "1rem 1rem 0 0", p: .5, mx: "auto", mt: 6 }


export const Comments = ({ isMobile }) => {
    return (
        <section
            aria-label="comentarios y calificaciones"
            id="comentarios"
            style={{ marginTop: "10rem" }}
        >
            <Section
                texto="Comentarios"
                side="right"
                key="comentarios"
                linkTo="comentarios"
            />
            <Box
                sx={blueBox}
                width={isMobile ? "96vw" : "79vw"}
            >
                <Typography
                    variant="subtitle1"
                    color="#FFFFFF"
                    textAlign="center"
                >
                    No pases malos ratos y así como ellos obtén lo que necesitas
                </Typography>
            </Box>

            <Box className="marginForDesktop">
                <Carousel
                    swipeable={isMobile}
                    draggable={isMobile}
                    showDots={true}
                    responsive={responsiveCarousel}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={10000}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {imgs_comments.map((comment) => (
                        <Box
                            key={comment.url}
                            mx={1}
                            mt={1}
                            mb={4}
                        >
                            <img
                                src={comment.url}
                                alt={comment.url}
                                style={imgStyle}
                                loading="lazy"
                            />
                        </Box>
                    ))}
                </Carousel>
            </Box>
        </section>
    )
}
