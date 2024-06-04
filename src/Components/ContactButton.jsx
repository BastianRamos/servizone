import { Box } from "@mui/material"


export const ContactButton = ({ imgUrl, blurColor, contactUrl }) => {

  const boxStyle = {
    boxShadow: `0 0 4rem ${blurColor}`,
    borderRadius: 2,
    width: '80%',
    marginY: 3,
    padding: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    cursor: 'pointer',
  }

  return (
    <Box sx={boxStyle} onClick={() => alert('hola')}>
      <img src={imgUrl} width='60%' />
    </Box>
  )
}
