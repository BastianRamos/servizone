import { Box } from "@mui/material"


export const ContactButton = ({ imgUrl, blurColor, contactUrl }) => {

  const boxStyle = {
    boxShadow: `0 0 6rem ${blurColor}`,
    borderRadius: 2,
    width: '80%',
    marginY: 6,
    padding: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    cursor: 'pointer',
  }

  return (
    <a href={contactUrl} target='_blank' >
      <Box sx={boxStyle} >
        <img src={imgUrl} width='60%' />
      </Box>
    </a>
  )
}
