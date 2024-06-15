import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

const cardStyle = {
    maxWidth: 345,
    height: 220,
    alignContent: 'center',
    padding: 1,
    boxShadow: 'none',
    border: '1px solid lightgray'
}


export const CardService = ({ urlImg, altImg, texto }) => {
    return (
        <Card sx={cardStyle}>
            <CardActionArea>
                <CardMedia
                    className="cardMediaSize"
                    component="img"
                    image={urlImg}
                    alt={altImg}
                />
                <CardContent sx={{ padding: 1 }} >
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                    >
                        {texto}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
