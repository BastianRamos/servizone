import { Box, Grow } from "@mui/material"

import {
  useEffect,
  useState
} from "react"


export const ContactButton = ({
  imgUrl,
  blurColor,
  contactUrl,
  alt,
  isMobile
}) => {

  const boxStyle = {
    boxShadow: `0 0 6rem ${blurColor}`,
    borderRadius: 1,
    width: isMobile ? '70%' : '120%',
    marginY: 6,
    padding: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    cursor: 'pointer',
  }

  const [isPastDistance, setIsPastDistance] = useState(false)
  const distanceFromTop = isMobile ? 2800 : 4200

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsPastDistance(scrollPosition >= distanceFromTop)
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Grow
      in={isPastDistance}
      timeout={2000}
    >
      <a
        href={contactUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box
          className="transformScale"
          sx={boxStyle}
        >
          <img
            src={imgUrl}
            width="50%"
            alt={alt}
            loading="lazy"
          />
        </Box>
      </a>
    </Grow>
  )
}
