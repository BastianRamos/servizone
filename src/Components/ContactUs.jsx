import {
    Box,
    Grid,
    Typography
} from "@mui/material"

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

const blueBox = { backgroundColor: "#0071DB", borderRadius: "50% 50%", p: 6, mt: 10, mx: 1 }


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
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        key={redContacto.src}
                    >
                        <ContactButton
                            imgUrl={redContacto.src}
                            contactUrl={redContacto.link}
                            blurColor={redContacto.color}
                            alt={redContacto.src}
                            isMobile={isMobile}
                        />
                    </Grid>
                ))}
            </Grid>

            <Box sx={blueBox}>
                <Typography
                    variant="subtitle1"
                    textAlign="center"
                    color="#FFFFFF"
                >
                    Contacta por el medio que gustes, busca en google maps o sigue las redes sociales
                </Typography>
            </Box>
        </section>
    )
}
