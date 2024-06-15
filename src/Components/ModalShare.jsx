import { useState } from "react";
import { Share } from "@mui/icons-material"

import {
    Backdrop,
    Box,
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
    height:'40vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    borderRadius: 2,
    textAlign: 'center',
    alignContent:'center',
};

const styleIcon = { padding: 10 }


export const ModalShare = () => {
    const [open, setOpen] = useState(false);
    const shareUrl = window.location.href

    return (
        <>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="compartir"
                onClick={() => setOpen(true)}
            >
                <Share fontSize='large' />
            </IconButton>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{ backdrop: { timeout: 500 } }}
            >
                <Fade in={open}>
                    <Box sx={styleBoxModal}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" mt={1}>
                            Compártenos donde gustes :)
                        </Typography>
                        <Box mt={2}>
                            <Grow in={open} {...(open && { timeout: 1000 })}>
                                <WhatsappShareButton url={shareUrl}>
                                    <WhatsappIcon size={40} round style={styleIcon} />
                                </WhatsappShareButton>
                            </Grow>
                            <Grow in={open} {...(open && { timeout: 1200 })}>
                                <FacebookShareButton url={shareUrl}>
                                    <FacebookIcon size={40} round style={styleIcon} />
                                </FacebookShareButton>
                            </Grow>
                            <Grow in={open} {...(open && { timeout: 1400 })}>
                                <FacebookMessengerShareButton url={shareUrl}>
                                    <FacebookMessengerIcon size={40} round style={styleIcon} />
                                </FacebookMessengerShareButton>
                            </Grow>
                            <Grow in={open} {...(open && { timeout: 1600 })}>
                                <TwitterShareButton url={shareUrl}>
                                    <TwitterIcon size={40} round style={styleIcon} />
                                </TwitterShareButton>
                            </Grow>
                            <Grow in={open} {...(open && { timeout: 1800 })}>
                                <TelegramShareButton url={shareUrl}>
                                    <TelegramIcon size={40} round style={styleIcon} />
                                </TelegramShareButton>
                            </Grow>
                            <Grow in={open} {...(open && { timeout: 2000 })}>
                                <EmailShareButton url={shareUrl}>
                                    <EmailIcon size={40} round style={styleIcon} />
                                </EmailShareButton>
                            </Grow>
                            <Grow in={open} {...(open && { timeout: 2200 })}>
                                <LinkedinShareButton url={shareUrl}>
                                    <LinkedinIcon size={40} round style={styleIcon} />
                                </LinkedinShareButton>
                            </Grow>
                            <Grow in={open} {...(open && { timeout: 2400 })}>
                                <RedditShareButton url={shareUrl}>
                                    <RedditIcon size={40} round style={styleIcon} />
                                </RedditShareButton>
                            </Grow>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}
