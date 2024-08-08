import {
    ContactUs,
    Footer,
    NavBar,
    Notebook,
    OurServices,
    WorkDone,
    PcBrands,
    Comments
} from "./components"

const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches


export const Landing = () => {
    return (
        <>
            <NavBar />

            <main aria-label="Contenido principal">
                <Notebook />

                <PcBrands />

                <OurServices />

                <WorkDone isMobile={isMobile} />

                <Comments isMobile={isMobile} />

                <ContactUs isMobile={isMobile} />
            </main>

            <Footer />
        </>
    )
}
