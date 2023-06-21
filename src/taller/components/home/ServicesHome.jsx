import { NavLink, Link } from "react-router-dom"

import { mainImage11 } from "../../../assets"



export const ServicesHome = () => {
    return (
       <section className="relative homepage__image">
            <img 
                src={ mainImage11 } 
                alt="mainImage"
                className="h-screen w-full object-cover object-left"
            />
            <div className="absolute top-[25%] right-[35%] translate-x-[30%] z-[100]">
                <div className="w-[300px]">
                    <h1 className="text-4xl text-white mb-6 ml-4">El mejor servicio en enderezado y pintura</h1>
                    <p className="text-white mb-8 ml-8">
                        Somos tu mejor aliado para mantener tu vehiculo como nuevo. Nuestros clientes son nuestra prioridad,
                        por eso damos el mejor servicio para tu satisfacción, con resultados de alta calidad garantizado
                    </p>
                    <Link
                        to="/servicios"
                        // className="hidden md:flex items-center justify-center text-sm text-white bg-red-600 h-[50px] w-[130px] rounded-3xl hover:bg-slate-800">
                        className="flex items-center justify-center text-sm text-white bg-red-600 h-[50px] w-[130px] rounded-3xl hover:bg-slate-800 ml-6">
                        SERVICIOS
                    </Link>
                </div>  
            </div>
        </section> 
    )
}
