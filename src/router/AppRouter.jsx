import { Navigate, Route, Routes } from "react-router-dom"

import { 
    TallerPage, 
    AboutPage, 
    GalleryPage, 
    HomePage, 
    ServicesPage, 
    ContactPage 
} from "../taller/pages"







export const AppRouter = () => {
    return(

        <Routes>
            <Route path="/" element ={ <TallerPage /> } />

            {/* pages */}
            <Route path="inicio" element ={ <HomePage /> } />
            <Route path="acerca" element ={ <AboutPage /> } />
            <Route path="servicios" element ={ <ServicesPage /> } />
            <Route path="contacto" element ={ < ContactPage/> } />
            <Route path="galeria" element ={ <GalleryPage /> } />
        

            <Route path="/*" element={ <Navigate to="/" /> }/> 
        </Routes>

    )
}
