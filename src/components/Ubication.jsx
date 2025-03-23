import { useState } from "react"

import {
    Backdrop,
    Button,
    Fade,
    Grid,
    Grow,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Modal,
} from "@mui/material"

import {
    CloseRounded,
    PinDrop
} from "@mui/icons-material"

const styleContainerModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '94vw',
    minHeight: '50vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 1,
    padding: 1
}

const styleButton = {
    mx: 2,
    '&:hover': {
        boxShadow: '0 2px #FF621E',
        backgroundColor: 'transparent',
        borderRadius: 0,
        transition: '1s !important'
    }
}


export const Ubication = ({ isMobile, itemStyle }) => {

    const [modalState, setModalState] = useState(false)

    const openModal = () => {
        setModalState(true)
    }

    const closeModal = () => {
        setModalState(false)
    }

    return (
        <>
            {isMobile
                ?
                <ListItem sx={itemStyle}>
                    <ListItemButton>
                        <ListItemIcon>
                            <PinDrop color="warning" />
                        </ListItemIcon>

                        <ListItemText
                            primary="Ubicación"
                            onClick={openModal}
                        />
                    </ListItemButton>
                </ListItem>
                :
                <Grow
                    in={true}
                    timeout={1500}
                >
                    <Button
                        color='inherit'
                        variant='text'
                        sx={styleButton}
                        onClick={openModal}
                    >
                        Ubicación
                    </Button>
                </Grow>
            }

            <Modal
                key="modalUbication"
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
                        xs={12}
                        textAlign="right"
                    >
                        <Grow
                            in={modalState}
                            timeout={2000}
                        >
                            <IconButton onClick={closeModal}>
                                <CloseRounded />
                            </IconButton>
                        </Grow>
                    </Grid>

                    <Grid item xs={12}>
                        <Fade
                            in={modalState}
                            timeout={2000}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.1037430327906!2d-70.7695234!3d-33.550680799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dda0145c0a87%3A0x994cec1483dfb4dc!2sSERVIZONE!5e0!3m2!1ses-419!2scl!4v1742759198780!5m2!1ses-419!2scl"
                                width={"100%"}
                                height={500}
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">

                            </iframe>
                        </Fade>
                    </Grid>
                </Grid>
            </Modal>
        </>
    )
}
