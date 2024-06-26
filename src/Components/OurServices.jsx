import {
    Box,
    Grid
} from "@mui/material"

import {
    Section,
    CardService
} from "../components"


export const OurServices = () => {
    return (
        <section aria-label="Nuestros servicios">
            <Box
                className="marginForDesktop"
                id="servicios"
            >
                <Section
                    key="servicios"
                    texto="Nuestos Servicios"
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
                    px={1}
                    py={4}
                    sx={{ backgroundColor: '#ECF5FF' }}
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
                            texto="Reparación de computadoras"
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
                            texto="Mantención de computadoras"
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
                            texto="Reparación de celular y tablet"
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
                            texto="Recuperación de datos"
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
                            texto="Asesoría en compra de equipos"
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
                            texto="Desarrollo web"
                        />
                    </Grid>
                </Grid>
            </Box>
        </section>
    )
}
