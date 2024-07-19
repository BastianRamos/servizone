import { useState } from "react";

import {
    HighlightOff,
    Share
} from "@mui/icons-material"

import {
    Backdrop,
    Box,
    Button,
    Fade,
    Grow,
    IconButton,
    Modal,
    Typography
} from "@mui/material"

import {
    FacebookShareButton,
    FacebookIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TelegramShareButton,
    TelegramIcon,
    WhatsappShareButton,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon,
    RedditShareButton,
    RedditIcon,
} from "react-share";

const styleBoxModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '89vw',
    height: '40vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    borderRadius: 1,
    textAlign: 'center',
    alignContent: 'center',
}

const styleIcon = { padding: 10 }


export const ModalShare = () => {
    const [open, setOpen] = useState(false);
    const shareUrl = window.location.href

    const openModal = () => {
        setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
    }

    return (
        <>
            <Fade
                in={true}
                timeout={40000}
            >
                <IconButton
                    color="inherit"
                    aria-label="Botón para compartir página en redes sociales"
                    onClick={openModal}
                >
                    <Share fontSize='large' />
                </IconButton>
            </Fade>

            <Modal
                open={open}
                onClose={closeModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{ backdrop: { timeout: 500 } }}
            >
                <Fade
                    in={open}
                    timeout={500}
                >
                    <Box sx={styleBoxModal}>
                        <Typography
                            id="modal-title"
                            variant="h6"
                            component="h2"
                            mt={1}
                            color="primary"
                        >
                            Compártenos donde gustes :)
                        </Typography>

                        <Box mt={2}>
                            <Grow
                                in={open}
                                {...(open && { timeout: 1200 })}
                            >
                                <WhatsappShareButton
                                    url={shareUrl}
                                    aria-label="Compartir en Whatsapp"
                                >
                                    <WhatsappIcon
                                        size={40}
                                        round
                                        style={styleIcon}
                                    />
                                </WhatsappShareButton>
                            </Grow>

                            <Grow
                                in={open}
                                {...(open && { timeout: 1400 })}
                            >
                                <FacebookShareButton
                                    url={shareUrl}
                                    aria-label="Compartir en Facebook"
                                >
                                    <FacebookIcon
                                        size={40}
                                        round
                                        style={styleIcon}
                                    />
                                </FacebookShareButton>
                            </Grow>

                            <Grow
                                in={open}
                                {...(open && { timeout: 1600 })}
                            >
                                <FacebookMessengerShareButton
                                    url={shareUrl}
                                    aria-label="Compartir en Messenger de Facebook"
                                >
                                    <FacebookMessengerIcon
                                        size={40}
                                        round
                                        style={styleIcon}
                                    />
                                </FacebookMessengerShareButton>
                            </Grow>

                            <Grow
                                in={open}
                                {...(open && { timeout: 1800 })}
                            >
                                <TwitterShareButton
                                    url={shareUrl}
                                    aria-label="Compartir en Twitter, actualmente X"
                                >
                                    <TwitterIcon
                                        size={40}
                                        round
                                        style={styleIcon}
                                    />
                                </TwitterShareButton>
                            </Grow>

                            <Grow
                                in={open}
                                {...(open && { timeout: 2000 })}
                            >
                                <TelegramShareButton
                                    url={shareUrl}
                                    aria-label="Compartir en Telegram"
                                >
                                    <TelegramIcon
                                        size={40}
                                        round
                                        style={styleIcon}
                                    />
                                </TelegramShareButton>
                            </Grow>

                            <Grow
                                in={open}
                                {...(open && { timeout: 2200 })}
                            >
                                <EmailShareButton
                                    url={shareUrl}
                                    aria-label="Compartir por correo electrónico"
                                >
                                    <EmailIcon
                                        size={40}
                                        round
                                        style={styleIcon}
                                    />
                                </EmailShareButton>
                            </Grow>

                            <Grow
                                in={open}
                                {...(open && { timeout: 2400 })}
                            >
                                <LinkedinShareButton
                                    url={shareUrl}
                                    aria-label="Compartir en Linkedin"
                                >
                                    <LinkedinIcon
                                        size={40}
                                        round
                                        style={styleIcon}
                                    />
                                </LinkedinShareButton>
                            </Grow>

                            <Grow
                                in={open}
                                {...(open && { timeout: 2600 })}
                            >
                                <RedditShareButton
                                    url={shareUrl}
                                    aria-label="Compartir en Reddit"
                                >
                                    <RedditIcon
                                        size={40}
                                        round
                                        style={styleIcon}
                                    />
                                </RedditShareButton>
                            </Grow>
                        </Box>
                        <Grow
                            in={open}
                            {...(open && { timeout: 2800 })}
                        >
                            <Button
                                variant="outlined"
                                size="small"
                                onClick={closeModal}
                                sx={{ marginTop: 2 }}
                                startIcon={<HighlightOff />}
                            >
                                Cerrar
                            </Button>
                        </Grow>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}
