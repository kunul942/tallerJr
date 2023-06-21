import { Navbar, Footer, NavbarSection, Services } from "../components/"

import { navbarSection } from "../../constant"

export const ServicesPage = () => {
    return (
        <>
            <Navbar />
            <NavbarSection
                service={ navbarSection.services }
            />
            <Services   />            

            <Footer />
        </>
    )
}
