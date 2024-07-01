import {
    ContactUs,
    Footer,
    NavBar,
    Notebook,
    OurServices,
    WorkDone,
    PcBrands
} from "./components"


export const Landing = () => {
    return (
        <>
            <NavBar />
            <main aria-label="Contenido principal">
                <Notebook />
                <PcBrands />
                <OurServices />
                <WorkDone />
                <ContactUs />
            </main>
            <Footer />
        </>
    )
}
