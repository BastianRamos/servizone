import {
    ContactUs,
    Footer,
    NavBar,
    Notebook,
    OurServices,
    WorkDone,
    PcBrands
} from "./components"
import { Comments } from "./components/Comments"


export const Landing = () => {
    return (
        <>
            <NavBar />
            <main aria-label="Contenido principal">
                <Notebook />
                <PcBrands />
                <OurServices />
                <WorkDone />
                <Comments />
                <ContactUs />
            </main>
            <Footer />
        </>
    )
}
