import { Grid } from "@mui/material"

import {
    ContactButton,
    Section
} from "../components"

const redes_contacto = [
    {
        src: '/redes_contacto/whatsapp-logo.webp',
        color: '#04B300',
        link: 'https://wa.me/+56996181785'
    },
    {
        src: '/redes_contacto/facebook-logo.webp',
        color: '#1E90FF',
        link: 'https://www.facebook.com/profile.php?id=61557674667228&locale=es_LA'
    },
    {
        src: '/redes_contacto/instagram-logo.webp',
        color: '#E1204E',
        link: 'https://www.instagram.com/servizone.cl/'
    },
    {
        src: '/redes_contacto/gmail-logo.webp',
        color: '#FFD705',
        link: 'mailto:servizone.cl@gmail.com'
    }
]


export const ContactUs = () => {
    return (
        <section
            aria-label="Redes de contacto"
            className="marginForDesktop"
            id="contacto"
            style={{ paddingTop: 10 }}
        >
            <Section
                key="contactanos"
                texto="Contáctanos"
                colorFondo="#FF621E"
            />
            <Grid
                container
                spacing={2}
                my={4}
                py={2}
            >
                {redes_contacto.map((redContacto) => (
                    <Grid item xs={12} sm={6} md={3} key={redContacto.src}>
                        <ContactButton
                            imgUrl={redContacto.src}
                            contactUrl={redContacto.link}
                            blurColor={redContacto.color}
                            alt={redContacto.src}
                        />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}
