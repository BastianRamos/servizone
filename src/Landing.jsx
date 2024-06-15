import {
    ContactUs,
    Footer,
    NavBar,
    Notebook,
    OurServices,
    WorkDone
} from '/Components'


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
