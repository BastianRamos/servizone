import { Grid } from "@mui/material"

import {
    Section,
    CardService
} from "../components"


export const OurServices = ({ isMobile }) => {
    return (
        <section
            aria-label="Nuestros servicios"
            id="servicios"
        >
            <Section
                key="servicios"
                texto="Servicios"
                side="right"
                mt={4}
                linkTo="servicios"
            />
            <Grid
                container
                rowSpacing={1}
                columnSpacing={isMobile ? 1 : 2}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                className="marginForDesktop"
                px={1}
                py={4}
            >
                <Grid
                    item
                    xs={6}
                    sm={4}
                    lg={2}
                >
                    <CardService
                        key="reparacion"
                        urlImg="/svg_services/reparacion-notebook.svg"
                        altImg="imagen reparacion notebook"
                        cardText="Reparación de computadoras"
                        modalTitle="Reparaciones"
                        modalServiceList={[
                            "Aumento de memoria RAM",
                            "Aumento de velocidad",
                            "Cambio de disco de almacenamiento",
                            "Cambio de pantalla",
                            "Cambio de teclado",
                            "Error del disco al 100% en Windows",
                            "Fallas de pantalla azul en Windows",
                            "Formateo de Windows",
                            "Ruidos extraños",
                            "Diagnóstico de fallas"
                        ]}
                    />
                </Grid>

                <Grid
                    item
                    xs={6}
                    sm={4}
                    lg={2}
                >
                    <CardService
                        key="mantencion"
                        urlImg="/svg_services/mantencion-notebook.svg"
                        altImg="imagen mantencion notebook"
                        cardText="Mantención de computadoras"
                        modalTitle="Mantenimiento"
                        modalServiceList={[
                            "Configuración para más rapidez",
                            "Licencia para Windows y Office",
                            "Problemas de temperatura alta",
                            "Problemas de rendimiento",
                            "Limpieza detallada",
                            "Pasta térmica y pads térmicos",
                            "Pila CMOS"
                        ]}
                    />
                </Grid>

                <Grid
                    item
                    xs={6}
                    sm={4}
                    lg={2}
                >
                    <CardService
                        key="asesoria"
                        urlImg="/svg_services/gamer.svg"
                        altImg="imagen control de consola de videojuegos"
                        cardText="Mantención de consolas"
                        modalTitle="Consolas de Videojuegos"
                        modalServiceList={[
                            "PlayStation - XBOX - Nintendo",
                            "Desarme completo para limpieza",
                            "Cambio de pasta térmica",
                            "Aumento de almacenamiento",
                            "Desbloqueo de PS3 con acceso online a biblioteca completa de juegos PSone, PS2, PSP y PS3"
                        ]}
                    />
                </Grid>

                <Grid
                    item
                    xs={6}
                    sm={4}
                    lg={2}
                >
                    <CardService
                        key="celular_tablet"
                        urlImg="/svg_services/android.svg"
                        altImg="smartphone android"
                        cardText="Reparación de celular y tablet"
                        modalTitle="Celulares y Tablets"
                        modalServiceList={[
                            "Cambio de pantalla",
                            "Cambio de bateria",
                            "Cambio de tapa trasera",
                            "Contacto con líquidos",
                            "Problemas para cargar",
                            "Sonido bajo en parlantes",
                        ]}
                    />
                </Grid>

                <Grid
                    item
                    xs={6}
                    sm={4}
                    lg={2}
                >
                    <CardService
                        key="recuperacion_datos"
                        urlImg="/svg_services/recuperacion_datos_basura.svg"
                        altImg="imagen de sacar datos de la basura"
                        cardText="Recuperación de datos"
                        modalTitle="Recupere sus Archivos"
                        modalServiceList={[
                            "Almacenamiento SSD",
                            "Disco HDD",
                            "Pendrive",
                            "Tarjeta SD",
                            "Tarjeta Micro SD",
                        ]}
                    />
                </Grid>

                <Grid
                    item
                    xs={6}
                    sm={4}
                    lg={2}
                >
                    <CardService
                        key="desarrollo_web"
                        urlImg="/svg_services/dev_web.svg"
                        altImg="imagen desarrollador web"
                        cardText="Desarrollo web"
                        modalTitle="Página Web"
                        modalServiceList={[
                            "Alojamiento en la nube",
                            "Adaptable a todas las pantallas",
                            "Carga rápida",
                            "Diseño moderno",
                            "Landing page",
                            "Maqueta en Figma",
                            "SEO",
                            "Tecnologías actuales",
                        ]}
                    />
                </Grid>
            </Grid>
        </section>
    )
}
