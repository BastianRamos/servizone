import { Box, Typography } from "@mui/material"
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';

const boxStyle = {}

export const Footer = () => {
    return (
        <Box sx={{
            height: 300,
            marginTop: 20,
            opacity: '80%',
            textAlign: 'center',
            alignContent: 'center',
            color: '#ffffff',
            backgroundColor: '#1E90FF',
        }}>
            <PinDropOutlinedIcon />
            <Typography
                align='center'
                variant="body2"
            >
                Región Metropolitana, Maipú
            </Typography>
            <Typography
                align='center'
                variant="body2"
                mt={2}
            >
                @2024 SERVIZONE hardware & software.
            </Typography>
        </Box>
    )
}
