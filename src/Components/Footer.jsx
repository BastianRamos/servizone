import {
    Box,
    Typography
} from "@mui/material"

import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";

const boxImgStyle = {
    backgroundImage: `url('/computador-footer.webp')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const boxColorStyle = {
    height: 300,
    marginTop: 20,
    textAlign: 'center',
    alignContent: 'center',
    color: '#ffffff',
    backgroundColor: 'rgba(30, 144, 255, .7)'
}


export const Footer = () => {
    return (
        <footer role="contentinfo">
            <Box sx={boxImgStyle}>
                <Box sx={boxColorStyle}>
                    <PinDropOutlinedIcon />

                    <Typography
                        align="center"
                        variant="body2"
                    >
                        Concejala Sra Hilda Porras, Maipú
                    </Typography>

                    <Typography
                        align="center"
                        variant="body2"
                        mt={2}
                    >
                        @2024 SERVIZONE hardware & software.
                    </Typography>
                </Box>
            </Box>
        </footer>
    )
}
