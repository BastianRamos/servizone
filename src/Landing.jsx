import {
    ContactUs,
    Footer,
    NavBar,
    Notebook,
    OurServices,
    WorkDone
} from './components'


export const Landing = () => {
    return (
        <>
            <NavBar />
            <Notebook />
            <OurServices />
            <WorkDone />
            <ContactUs />
            <Footer />
        </>
    )
}
