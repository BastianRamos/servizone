import { Box, Divider } from "@mui/material"


export const Notebook = () => {
    return (
        <Box className='marginForDesktop' id='top'>
            <Divider sx={{ borderTop: '6px solid #1E90FF', borderBottom: 'none', marginTop: 1, width: '20vw', float: 'left' }} />
            <Divider sx={{ borderTop: '6px solid #FF621E', borderBottom: 'none', marginTop: 2, width: '42vw', float: 'right' }} />
            <Divider sx={{ borderTop: '6px solid #1E90FF', borderBottom: 'none', marginTop: 1, width: '70vw', float: 'right' }} />
            <Divider sx={{ borderTop: '6px solid #FF621E', borderBottom: 'none', marginTop: 1, width: '48vw', float: 'left' }} />
            <Divider sx={{ borderTop: '6px solid #1E90FF', borderBottom: 'none', marginTop: 2, width: '30vw', float: 'right' }} />

            <Box display='flex' justifyContent='center' alignContent='center' width='100%'>
                <img
                    className="fullWidthImg"
                    alt="Notebook con logo de Servizone"
                    src="/public/logos/laptop-open.webp"
                />
            </Box>

            <Divider sx={{ borderTop: '6px solid #1E90FF', borderBottom: 'none', width: '40vw', float: 'right' }} />
            <Divider sx={{ borderTop: '6px solid #FF621E', borderBottom: 'none', marginTop: 1, width: '50vw', float: 'left' }} />
        </Box>
    )
}
