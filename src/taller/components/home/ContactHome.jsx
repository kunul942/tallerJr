import { NavLink, Link } from "react-router-dom"

import { mainImage7 } from "../../../assets"


export const ContactHome = () => {
    return (
        <section className="relative homepage__image">
            <img 
                src={ mainImage7 } 
                alt="mainImage"
                className="h-screen w-full object-cover"
            />
            <div className="absolute top-[25%] right-[35%] translate-x-[30%] z-[100]">
                <div className="w-[300px]"
                >
                    <h1 className="text-4xl text-white mb-6 ml-4">25 Años de experiencia nos respaldan</h1>
                    <p className="text-white mb-8 ml-6">
                        Somos una empresa dedicada a prestar servicios de enderezado y pintura.
                        Tenemos 25 años en la industria y el respaldo de miles de clientes satisfechos.
                    </p>
                    <Link
                        to="/contacto"
                        // className="hidden md:flex items-center justify-center text-sm text-white bg-red-600 h-[50px] w-[130px] rounded-3xl hover:bg-slate-800">
                        className="flex items-center justify-center text-sm text-white bg-red-600 h-[50px] w-[130px] rounded-3xl hover:bg-slate-800 ml-6">
                        CONTACTAR
                    </Link>
                </div>  
            </div>
        </section> 
    )
}
