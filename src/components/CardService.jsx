import { useState } from "react"

import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grow,
    Modal,
    Typography,
    Backdrop,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@mui/material"

import {
    CloseRounded,
    ArrowRight
} from '@mui/icons-material'

const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches

const cardStyle = {
    maxWidth: 345,
    height: 240,
    alignContent: 'center',
    padding: 1,
    boxShadow: 'none',
    border: '1px solid lightgray',
    borderRadius: 1
}

const styleContainerModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '96vw' : '60vw',
    minHeight: '40vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 1,
    padding: 1
}


export const CardService = ({
    urlImg,
    altImg,
    cardText,
    modalTitle = "Aún no hemos añadido información",
    modalServiceList = []
}) => {

    const [modalState, setModalState] = useState(false)

    const openModal = () => {
        setModalState(true)
    }

    const closeModal = () => {
        setModalState(false)
    }

    return (
        <>
            <Grow
                in={true}
                timeout={6000}
            >
                <Card
                    sx={cardStyle}
                    onClick={openModal}
                >
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
                                {cardText}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grow>

            <Modal
                key={cardText}
                open={modalState}
                onClose={closeModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{ backdrop: { timeout: 1000 } }}
            >
                <Grid
                    container
                    sx={styleContainerModal}
                >
                    <Grid
                        item
                        xs={10}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography
                            variant="h6"
                            color="primary"
                        >
                            {modalTitle}
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        xs={2}
                        textAlign="right"
                    >
                        <IconButton onClick={closeModal}>
                            <CloseRounded />
                        </IconButton>
                    </Grid>

                    <Grid item xs={12}>
                        <List dense>
                            {modalServiceList.map((service) => (
                                <ListItem key={service}>
                                    <ListItemIcon>
                                        <ArrowRight />
                                    </ListItemIcon>

                                    <ListItemText primary={service} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </Modal>
        </>
    )
}
