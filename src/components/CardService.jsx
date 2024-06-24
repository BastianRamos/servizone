import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grow,
    Typography
} from "@mui/material"

const cardStyle = {
    maxWidth: 345,
    height: 240,
    alignContent: 'center',
    padding: 1,
    boxShadow: 'none',
    border: '1px solid lightgray',
    borderRadius: 0
}


export const CardService = ({ urlImg, altImg, texto }) => {
    return (
        <Grow in={true} timeout={6000}>
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
        </Grow>
    )
}
