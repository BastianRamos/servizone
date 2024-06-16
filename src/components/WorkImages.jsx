import {
  AspectRatio,
  Box,
  Card
} from "@mui/joy"

const boxStyle = {
  py: 1,
  gap: 1,
  display: 'flex',
  overflow: 'auto',
  scrollSnapType: 'x mandatory',
  '& > *': { scrollSnapAlign: 'center' },
  '::-webkit-scrollbar': { display: 'none' },
}

const data = [
  { src: '/trabajos/trabajo1.webp' },
  { src: '/trabajos/trabajo2.webp' },
  { src: '/trabajos/trabajo3.webp' },
  { src: '/trabajos/trabajo4.webp' },
  { src: '/trabajos/trabajo5.webp' },
  { src: '/trabajos/trabajo6.webp' },
  { src: '/trabajos/trabajo7.webp' },
  { src: '/trabajos/trabajo8.webp' },
  { src: '/trabajos/trabajo9.webp' },
  { src: '/trabajos/trabajo10.webp' },
  { src: '/trabajos/trabajo11.webp' },
]


export const WorkImages = () => {
  return (
    <Box sx={boxStyle}>
      {data.map((item) => (
        <Card orientation="horizontal" size="sm" key={item.src} variant="outlined">
          <AspectRatio ratio="1" className='carrouselAspectRatioSize'>
            <img
              srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.src}?h=120&fit=crop&auto=format`}
              alt={item.src}
            />
          </AspectRatio>
        </Card>
      ))}
    </Box>
  )
}
