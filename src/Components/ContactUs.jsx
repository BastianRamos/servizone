import { Box } from "@mui/material"
import { ContactButton } from "./ContactButton"
import { Section } from "./Section"


export const ContactUs = () => {
  return (
    <Box className='marginForDesktop'>
        <Section
            key='contactanos'
            texto='Contáctanos'
            side="right"
        />
        <ContactButton />
    </Box>
  )
}
