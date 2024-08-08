import { Grid } from "@mui/material"

import {
    Section,
    CardService
} from "../components"


export const OurServices = () => {
    return (
        <section
            aria-label="Nuestros servicios"
            id="servicios"
        >
            <Section
                key="servicios"
                texto="Servicios"
                side="right"
                mt={10}
            />
            <Grid
                container
                rowSpacing={1}
                columnSpacing={1}
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
                            "Visagras rotas o dañadas",
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
                        key="asesoria"
                        urlImg="/svg_services/asesoria.svg"
                        altImg="imagen asesoria compra de equipos"
                        cardText="Asesoría tecnológica"
                        modalTitle="Asesoría Tecnológica"
                        modalServiceList={[
                            "Análisis en terreno con el fin de determinar la actualización de componentes en equipos actuales o adquirir nuevos.",
                            "Comparativa de costo y beneficio al adquirir licencias de software empresariales considerando el impacto a corto y largo plazo.",
                            "Informe comparativo de productos electrónicos para una compra efectiva.",
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
