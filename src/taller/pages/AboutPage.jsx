import { 
    Navbar, 
    Footer, 
    NavbarSection,    

    About,
} from '../components/'



import { navbarSection } from '../../constant'



export const AboutPage = () => {
    return(
        <>
            <Navbar />
            <NavbarSection 
                service={ navbarSection.about }
            />
            <About />   
            <Footer />
        </>
    )
}
