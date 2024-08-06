import {
  AspectRatio,
  Box,
  Card
} from "@mui/joy"

import {
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar
} from "@mui/material";

const boxStyle = {
  py: 4,
  gap: 1,
  display: 'flex',
  overflow: 'auto',
  scrollSnapType: 'x mandatory',
  '& > *': { scrollSnapAlign: 'center' },
  '::-webkit-scrollbar': { display: 'none' },
}

const images = [
  {
    src: '/trabajos/trabajo1.webp',
    title: 'Mantenimiento completo',
    subtitle: 'Dell Inspiron Gaming 5577'
  },
  {
    src: '/trabajos/trabajo2.webp',
    title: 'Temperatura de trabajo alta',
    subtitle: 'Lenovo Ideapad Gaming 3'
  },
  {
    src: '/trabajos/trabajo3.webp',
    title: 'Cambio de pantalla',
    subtitle: 'Motorola Z2 Play'
  },
  {
    src: '/trabajos/trabajo4.webp',
    title: 'Disco HDD dañado',
    subtitle: 'Dell Latitude Strike Zone año 2007'
  },
  {
    src: '/trabajos/trabajo5.webp',
    title: 'Fuente de poder certificada',
    subtitle: 'PC de escritorio año 2010'
  },
  {
    src: '/trabajos/trabajo6.webp',
    title: 'Instalación de disco SSD NVMe',
    subtitle: 'Alienware M15 R4'
  },
  {
    src: '/trabajos/trabajo7.webp',
    title: 'Aumento de memoria RAM',
    subtitle: 'Asus Serie X'
  },
  {
    src: '/trabajos/trabajo8.webp',
    title: 'Formateo con Windows 10',
    subtitle: 'Dell Gaming Serie 5000'
  },
  {
    src: '/trabajos/trabajo9.webp',
    title: 'Formateo y error de encendido',
    subtitle: 'Lenovo Ideapad y Thinkpad'
  },
  {
    src: '/trabajos/trabajo10.webp',
    title: 'Formateo con Windows 7',
    subtitle: 'Dell Inspiron 1420 año 2008'
  },
  {
    src: '/trabajos/trabajo11.webp',
    title: 'Aumento de almacenamiento',
    subtitle: 'Asus'
  },
  {
    src: '/trabajos/trabajo12.webp',
    title: 'Aumento de memoria RAM',
    subtitle: 'HP 250 G7'
  },
  {
    src: '/trabajos/trabajo13.webp',
    title: 'Cambio de pantalla y botones',
    subtitle: 'Huawei P40 Lite'
  },
  {
    src: '/trabajos/trabajo14.webp',
    title: 'Bloqueo por Bitlocker',
    subtitle: 'Lenovo Ideapad 5'
  },
]

const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches


export const WorkImages = () => {
  return (
    <>
      {isMobile ? (
        <Box
          sx={boxStyle}
        >
          <ImageList
            cols={14}
            variant="woven"
          >
            {images.map((img) => (
              <Card
                orientation="horizontal"
                size="none"
                key={img.src}
                variant="plain"
              >
                <AspectRatio
                  ratio="1"
                  className="carrouselAspectRatioSize"
                >
                  <ImageListItem key={img.src}>
                    <img
                      srcSet={`${img.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                      src={`${img.src}?h=120&fit=crop&auto=format`}
                      alt={img.src}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={img.title}
                      subtitle={img.subtitle}
                    />
                  </ImageListItem>
                </AspectRatio>
              </Card>
            ))}
          </ImageList>
        </Box>
      ) : (
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={1}
          py={4}
          className="marginForDesktop"
        >
          <ImageList
            cols={3}
            gap={6}
            variant="masonry"
          >
            {images.map((img) => (
              <ImageListItem key={img.src}>
                <img
                  srcSet={`${img.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  src={`${img.src}?h=120&fit=crop&auto=format`}
                  alt={img.subtitle}
                  width="100%"
                  style={{ borderRadius: 2 }}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={img.title}
                  subtitle={img.subtitle}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      )}
    </>
  )
}
