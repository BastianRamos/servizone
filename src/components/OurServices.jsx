import { Box, Grid } from "@mui/material"
import { Section, CardService } from "../components"

const itemStyle = { pb: 2, }


export const OurServices = () => {
    return (
        <Box
            className='marginForDesktop'
            id='servicios'
            pt={6}
        >
            <Section
                key='servicios'
                texto="Nuestos Servicios"
                side="right"
            />
            <Grid
                container
                rowSpacing={2}
                columnSpacing={1}
                px={1}
                py={10}
                sx={{ backgroundColor: '#ECF5FF' }}
            >
                <Grid
                    item
                    xs={6}
                    sm={4}
                    md={2}
                    sx={itemStyle}
                >
                    <CardService
                        key={'reparacion'}
                        urlImg={'/svg_services/reparacion-notebook.svg'}
                        altImg={'imagen reparacion notebook'}
                        texto={'Reparación de computadoras'}
                    />
                </Grid>

                <Grid
                    item
                    xs={6}
                    sm={4}
                    md={2}
                    sx={itemStyle}
                >
                    <CardService
                        key={'mantencion'}
                        urlImg={'/svg_services/mantencion-notebook.svg'}
                        altImg={'imagen mantencion notebook'}
                        texto={'Mantención de computadoras'}
                    />
                </Grid>

                <Grid
                    item
                    xs={6}
                    sm={4}
                    md={2}
                    sx={itemStyle}
                >
                    <CardService
                        key={'celular_tablet'}
                        urlImg={'/svg_services/android.svg'}
                        altImg={'smartphone android'}
                        texto={'Reparación de celular y tablet'}
                    />
                </Grid>

                <Grid
                    item
                    xs={6}
                    sm={4}
                    md={2}
                    sx={itemStyle}
                >
                    <CardService
                        key={'recuperacion_datos'}
                        urlImg={'/svg_services/recuperacion_datos_basura.svg'}
                        altImg={'imagen de sacar datos de la basura'}
                        texto={'Recuperación de datos'}
                    />
                </Grid>

                <Grid
                    item
                    xs={6}
                    sm={4}
                    md={2}
                    sx={itemStyle}
                >
                    <CardService
                        key={'asesoria'}
                        urlImg={'/svg_services/asesoria.svg'}
                        altImg={'imagen asesoria compra de equipos'}
                        texto={'Asesoría en compra de equipos'}
                    />
                </Grid>

                <Grid
                    item
                    xs={6}
                    sm={4}
                    md={2}
                    sx={itemStyle}
                >
                    <CardService
                        key={'desarrollo_web'}
                        urlImg={'/svg_services/dev_web.svg'}
                        altImg={'imagen desarrollador web'}
                        texto={'Desarrollo web'}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}
