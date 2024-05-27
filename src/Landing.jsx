import { ContactUs } from './Components/ContactUs'
import { NavBar } from './Components/NavBar'
import { Notebook } from './Components/Notebook'
import { OurServices } from './Components/OurServices'
import { WorkDone } from './Components/WorkDone'


export const Landing = () => {
    return (
        <>
            <NavBar />
            <Notebook />
            <OurServices />
            <WorkDone />
            <ContactUs/>
        </>
    )
}
