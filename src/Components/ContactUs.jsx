import { Box, Grid } from "@mui/material"
import { ContactButton } from "./ContactButton"
import { Section } from "./Section"


const redes_contacto = [
  { src: 'public/redes_contacto/facebook-logo.webp', color: '#1E90FF', link: 'https://www.facebook.com/profile.php?id=61557674667228&locale=es_LA' },
  { src: 'public/redes_contacto/instagram-logo.webp', color: '#E1204E', link: 'https://www.instagram.com/servizone.cl/' },

]

export const ContactUs = () => {
  return (
    <Box className='marginForDesktop'>
      <Section
        key='contactanos'
        texto='Contáctanos'
        side="right"
      />
      <Grid container spacing={2}>
        {redes_contacto.map((redContacto) => (
          <Grid>
            <ContactButton
              key={redContacto.link}
              imgUrl={redContacto.src}
              contactUrl={redContacto.link}
              blurColor={redContacto.color}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
