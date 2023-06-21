import { NavbarSection, Footer, Navbar, Gallery } from "../components"

import { navbarSection } from "../../constant"




export const GalleryPage = () => {
    return (
        <>
            <Navbar/>
            <NavbarSection
                service={ navbarSection.gallery }
            />
            <Gallery />
            <Footer />
        </>
    )
}
