import { useEffect } from 'react'
import { NavLink, Link } from "react-router-dom"

import AOS from 'aos'
import 'aos/dist/aos.css'


import { mainImage4 } from "../../../assets"


export const LearnMore = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <section className="relative homepage__image">
            <img 
                src={ mainImage4 } 
                alt="mainImage"
                className="h-screen w-full object-cover"
            />
            <div className="absolute top-[25%] right-[35%] translate-x-[30%] z-[100]">
                <div 
                    className="w-[300px]"
                    data-aos="fade-up"
                >   
                    <h1 className="text-4xl text-white mb-6 ml-4">La mejor calidad en enderezado y pintura</h1>
                    <p className="text-white mb-8 ml-6">
                        Sabemos lo importante que es para ti tu vehiculo, por eso lo cuidamos como si fuera nuestro.
                        Contamos con un taller de enderezado y pintura para ti
                    </p>
                    <Link
                        to="/acerca"
                        className="flex items-center justify-center text-sm text-white bg-red-600 h-[50px] w-[130px] rounded-3xl hover:bg-slate-800 ml-6">
                        SABER MÁS
                    </Link>
                </div>  
            </div>
        </section> 
    )
}
