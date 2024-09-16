import { Grid, Typography } from "@mui/material"

import {
    ContactButton,
    Section
} from "../components"

const redes_contacto = [
    {
        src: '/redes_contacto/gmail-logo.webp',
        color: '#FFD705',
        link: 'mailto:servizone.cl@gmail.com'
    },
    {
        src: '/redes_contacto/whatsapp-logo.webp',
        color: '#25D366',
        link: 'https://wa.me/+56996181785'
    },
]

const typographyStyle = { fontWeight: "300 !important", mt: 14, px: 2, color: "#FF621E" }


export const ContactUs = ({ isMobile }) => {
    return (
        <section
            aria-label="Redes de contacto"
            id="contacto"
            style={{ paddingTop: 10 }}
        >
            <Section
                key="contactanos"
                texto="Contacto"
                colorFondo="#FF621E"
                linkTo="contacto"
            />

            <Grid
                container
                justifyContent="space-evenly"
                spacing={2}
                my={4}
                py={2}
                className="marginForDesktop"
            >
                {redes_contacto.map((redContacto) => (
                    <Grid item xs={12} sm={6} md={3} key={redContacto.src}>
                        <ContactButton
                            imgUrl={redContacto.src}
                            contactUrl={redContacto.link}
                            blurColor={redContacto.color}
                            alt={redContacto.src}
                            isMobile={isMobile}
                        />
                    </Grid>
                ))}

                <Grid
                    item
                    xs={12}>
                    <Typography
                        variant="subtitle1"
                        textAlign="center"
                        sx={typographyStyle}
                    >
                        Contacta por el medio que gustes, busca en google maps o sigue las redes sociales
                    </Typography>
                </Grid>
            </Grid>
        </section>
    )
}
