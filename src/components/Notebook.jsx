import { Box, Divider, Fade, Grow, Slide, Zoom } from "@mui/material"


export const Notebook = () => {
    return (
        <Box className='marginForDesktop' id='top'>
            <Slide direction="right" in={true} timeout={6000}>
                <Divider sx={{ borderTop: '6px solid #1E90FF', borderBottom: 'none', marginTop: 1, width: '20vw', float: 'left' }} />
            </Slide>

            <Slide direction="left" in={true} timeout={3000}>
                <Divider sx={{ borderTop: '6px solid #FF621E', borderBottom: 'none', marginTop: 2, width: '42vw', float: 'right' }} />
            </Slide>

            <Slide direction="left" in={true} timeout={2000}>
                <Divider sx={{ borderTop: '6px solid #1E90FF', borderBottom: 'none', marginTop: 1, width: '70vw', float: 'right' }} />
            </Slide>

            <Slide direction="right" in={true} timeout={4000}>
                <Divider sx={{ borderTop: '6px solid #FF621E', borderBottom: 'none', marginTop: 1, width: '48vw', float: 'left' }} />
            </Slide>

            <Slide direction="left" in={true} timeout={3000}>
                <Divider sx={{ borderTop: '6px solid #1E90FF', borderBottom: 'none', marginTop: 2, width: '30vw', float: 'right' }} />
            </Slide>

            <Grow in={true} direction="up" timeout={3000}>
                <Box display='flex' justifyContent='center' alignContent='center' width='100%'>
                    <img
                        className="fullWidthImg"
                        alt="Notebook con logo de Servizone"
                        src="/logos/laptop-open.webp"
                    />
                </Box>
            </Grow>

            <Slide direction="left" in={true} timeout={4000}>
                <Divider sx={{ borderTop: '6px solid #1E90FF', borderBottom: 'none', width: '40vw', float: 'right' }} />
            </Slide>

            <Slide direction="right" in={true} timeout={10000}>
                <Divider sx={{ borderTop: '6px solid #FF621E', borderBottom: 'none', marginTop: 1, width: '50vw', float: 'left' }} />
            </Slide>
        </Box>
    )
}
