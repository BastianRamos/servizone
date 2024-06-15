import {
    ContactUs,
    Footer,
    NavBar,
    Notebook,
    OurServices,
    WorkDone
} from 'src/components'


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
