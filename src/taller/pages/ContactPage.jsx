import { Navbar, Footer, NavbarSection, Contact } from '../components'
import { navbarSection } from '../../constant'

export const ContactPage = () => {
    return (
        <>
            <Navbar />
            <NavbarSection
                service={ navbarSection.contact }
            />
            <Contact />
            <Footer />
        </>
    )
}
