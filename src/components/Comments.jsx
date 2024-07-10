import Carousel from "react-multi-carousel"
import { Box } from "@mui/material"
import { Section } from "./Section"
import "react-multi-carousel/lib/styles.css"

const responsive = {
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
};

const imgs_comments = [
    { url: "comentarios/comentario_google.webp" },
    { url: "comentarios/comentario2_google.webp" },
    { url: "comentarios/comentario3_google.webp" },
    { url: "comentarios/comentario4_google.webp" },
    { url: "comentarios/comentario_facebook.webp" },
    { url: "comentarios/comentario2_facebook.webp" },
]

const imgStyle = {
    borderRadius: 4,
    boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
    width: "100%"
}

const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches


export const Comments = () => {
    return (
        <section
            aria-label="comentarios y calificaciones"
            className="marginForDesktop"
            id="comentarios"
        >
            <Section
                texto="Comentarios"
                side="right"
                key="comentarios"
            />

            <Carousel
                swipeable={isMobile}
                draggable={isMobile}
                showDots={true}
                responsive={responsive}
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
                {
                    imgs_comments.map((comment) => (
                        <Box
                            key={comment.url}
                            mx={1}
                            my={4}
                        >
                            <img
                                src={comment.url}
                                alt={comment.url}
                                style={imgStyle}
                            />
                        </Box>
                    ))
                }
            </Carousel>
        </section>
    )
}
