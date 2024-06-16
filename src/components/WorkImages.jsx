import {
  AspectRatio,
  Box,
  Card
} from "@mui/joy"
import { Grid } from "@mui/material";

const boxStyle = {
  py: 1,
  gap: 1,
  display: 'flex',
  overflow: 'auto',
  scrollSnapType: 'x mandatory',
  '& > *': { scrollSnapAlign: 'center' },
  '::-webkit-scrollbar': { display: 'none' },
}

const images = [
  { src: '/trabajos/trabajo1.webp' },
  { src: '/trabajos/trabajo2.webp' },
  { src: '/trabajos/trabajo3.webp' },
  { src: '/trabajos/trabajo4.webp' },
  { src: '/trabajos/trabajo6.webp' },
  { src: '/trabajos/trabajo7.webp' },
  { src: '/trabajos/trabajo10.webp' },
  { src: '/trabajos/trabajo11.webp' },
  { src: '/trabajos/trabajo9.webp' },
  { src: '/trabajos/trabajo8.webp' },
  { src: '/trabajos/trabajo5.webp' },
]

const isMobile = window.matchMedia('only screen and (max-width: 768px)').matches;


export const WorkImages = () => {
  return (
    <>
      {isMobile ? (
        <Box sx={boxStyle}>
          {images.map((img) => (
            <Card
              orientation="horizontal"
              size="sm"
              key={img.src}
              variant="outlined"
            >
              <AspectRatio
                ratio="1"
                className='carrouselAspectRatioSize'
              >
                <img
                  srcSet={`${img.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  src={`${img.src}?h=120&fit=crop&auto=format`}
                  alt={img.src}
                />
              </AspectRatio>
            </Card>
          ))}
        </Box>
      ) : (
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={1}
        >
          {images.map((img) => (
            <Grid
              item
              sm={4}
            >
              <img
                srcSet={`${img.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                src={`${img.src}?h=120&fit=crop&auto=format`}
                alt={img.src}
                width='100%'
                style={{ borderRadius: 4 }}
              />
            </Grid>
          )
          )}
        </Grid>
      )
      }
    </>
  )
}
