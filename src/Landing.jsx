import { Box, Fade } from '@mui/material'

import {
    ContactUs,
    Footer,
    NavBar,
    Notebook,
    OurServices,
    WorkDone
} from './components'

const isMobile = window.matchMedia('only screen and (max-width: 767px)').matches


export const Landing = () => {
    return (
        <>
            <NavBar />
            <Notebook />
            <Box textAlign="center" >
                <Fade
                    in={true}
                    timeout={6000}
                >
                    <img
                        src={isMobile ? "/brands_pc.webp" : "/brands2_pc.webp"}
                        className="opacityBrands"
                        alt="imagen de marcas de computadoras"
                    />
                </Fade>
            </Box>
            <OurServices />
            <WorkDone />
            <ContactUs />
            <Footer />
        </>
    )
}
