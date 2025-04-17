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
  gap: 1,
  display: 'flex',
  overflow: 'auto',
  scrollSnapType: 'x mandatory',
  '& > *': { scrollSnapAlign: 'center' },
  '::-webkit-scrollbar': { display: 'none' },
}

const borderRadius = { borderRadius: 4 }

const images = [
  {
    src: '/trabajos/trabajo1.webp',
    title: 'Mantenimiento',
    subtitle: 'Dell Inspiron Gaming 5577'
  },
  {
    src: '/trabajos/trabajo2.webp',
    title: 'Mantenimiento',
    subtitle: 'Lenovo Gamer Victus'
  },
  {
    src: '/trabajos/trabajo3.webp',
    title: 'Mejora de rendimiento',
    subtitle: 'Asus ROG Strix'
  },
  {
    src: '/trabajos/trabajo4.webp',
    title: 'Disco HDD dañado',
    subtitle: 'Dell Latitude 2007'
  },
  {
    src: '/trabajos/trabajo5.webp',
    title: 'Mantenimiento PC Gamer',
    subtitle: 'Intel i5 - GTX 1650'
  },
  {
    src: '/trabajos/trabajo6.webp',
    title: 'Falla por corrosión',
    subtitle: 'Samsung Galaxy A50'
  },
  {
    src: '/trabajos/trabajo7.webp',
    title: 'Aumento de memoria RAM',
    subtitle: 'Asus Serie X'
  },
  {
    src: '/trabajos/trabajo8.webp',
    title: 'Reemplazo de ventiladores',
    subtitle: 'Acer Nitro 5'
  },
  {
    src: '/trabajos/trabajo9.webp',
    title: 'Reemplazo de SSD',
    subtitle: 'HP Envy Touch i7'
  },
  {
    src: '/trabajos/trabajo10.webp',
    title: 'Problema de drift',
    subtitle: 'Mando de PS5'
  },
  {
    src: '/trabajos/trabajo11.webp',
    title: 'Armado de PC Gamer',
    subtitle: 'Intel i5 - RTX 4070 super'
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
  {
    src: '/trabajos/trabajo15.webp',
    title: 'Mantenimiento preventivo',
    subtitle: 'PS4 Slim'
  },
  {
    src: '/trabajos/trabajo16.webp',
    title: 'Pantallazo azul',
    subtitle: 'Notebook Asus'
  },
  {
    src: '/trabajos/trabajo17.webp',
    title: 'Formateo Windows 11',
    subtitle: 'Asus Vivobook i3'
  },
  {
    src: '/trabajos/trabajo18.webp',
    title: 'Daño en placa madre',
    subtitle: 'Lenovo Legion 5'
  },
  {
    src: '/trabajos/trabajo19.webp',
    title: 'Aumento de almacenamiento SSD',
    subtitle: 'Alienware M15 R4'
  },
  {
    src: '/trabajos/trabajo20.webp',
    title: 'Diagnóstico de falla',
    subtitle: 'PC Dell T3500'
  },
  {
    src: '/trabajos/trabajo21.webp',
    title: 'Importación de bateria original',
    subtitle: 'Asus Zenbook'
  },
]


export const WorkImages = ({ isMobile }) => {
  return (
    <>
      {isMobile ? (
        <Box sx={boxStyle}>
          <ImageList
            cols={images.length}
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
                      style={borderRadius}
                    />
                    <ImageListItemBar
                      title={img.title}
                      subtitle={img.subtitle}
                      style={borderRadius}
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
          pb={4}
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
                  style={borderRadius}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={img.title}
                  subtitle={img.subtitle}
                  style={borderRadius}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      )}
    </>
  )
}
