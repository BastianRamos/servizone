import { Box } from "@mui/material"
import Carousel from "react-multi-carousel"
// import "react-multi-carousel/lib/styles.css"

const responsiveCarousel = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
}

const youtube_videos = [
    {
        url: "https://www.youtube.com/embed/3MeFuP4nUoU",
        title: "Mantención PS4 Fat"
    },
    {
        url: "https://www.youtube.com/embed/-TZt_5CDIDU?si=QHgAfbk01ipkHkVz",
        title: "Mantención Alienware"
    },
    {
        url: "https://www.youtube.com/embed/FcrD_VpgJ5M",
        title: "Armado de PC Gamer"
    },
    {
        url: "https://www.youtube.com/embed/GoeIuZqiv20?si=GO291MWoHtuCmGT4",
        title: "Sony Vaio disco dañado"
    },
    {
        url: "https://www.youtube.com/embed/WSmqt-IMFD4",
        title: "Reparación Mandos PS5"
    },
    {
        url: "https://www.youtube.com/embed/i-2C1JYgSjg?si=4oe-YnzZWve6v3bZ",
        title: "Lenovo Gaming temperatura alta"
    },
    {
        url: "https://www.youtube.com/embed/FcICoNAzkdM",
        title: "Revivimos un Acer Gamer"
    },
]


export const WorkVideos = () => {
    return (
        <section
            aria-label="videos resumen sobre trabajos realizados"
            id="videos"
        >
            <Box className="marginForDesktop">
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsiveCarousel}
                    ssr={true}
                    infinite={true}
                    autoPlay={false}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {youtube_videos.map((video) => (
                        <Box
                            key={video.url}
                            mx={2}
                            mt={1}
                            mb={6}
                        >
                            <iframe
                                width="100%"
                                height="400"
                                src={video.url}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                style={{ borderRadius: 4 }}
                                loading="lazy"
                            >
                            </iframe>
                        </Box>
                    ))}
                </Carousel>
            </Box>
        </section>
    )
}
