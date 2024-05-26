import { 
    AspectRatio,
    Box,
    Card 
} from "@mui/joy"

const boxStyle = {
    display: 'flex',
    gap: 1,
    py: 1,
    overflow: 'auto',
    width: '98vw',
    scrollSnapType: 'x mandatory',
    '& > *': {
      scrollSnapAlign: 'center',
    },
    '::-webkit-scrollbar': { display: 'none' },
  }

const data = [
    {src: 'public/trabajos/trabajo1.webp'},
    {src: 'public/trabajos/trabajo2.webp'},
    {src: 'public/trabajos/trabajo3.webp'},
    {src: 'public/trabajos/trabajo4.webp'},
    {src: 'public/trabajos/trabajo5.webp'},
    {src: 'public/trabajos/trabajo6.webp'},
    {src: 'public/trabajos/trabajo7.webp'},
    {src: 'public/trabajos/trabajo8.webp'},
]


export const Carrousel = () => {
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
