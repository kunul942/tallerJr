import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { mainImageServices } from "../../assets"


export const NavbarSection = ({ service }) => {

    useEffect(() => {
      AOS.init({ duration: 1000 })

    }, [])
    

    return (
        <div 
            className="relative footer__image"
            data-aos="fade-up"
        >
            <img
            src={ mainImageServices }
            alt="imageServices"
            className="h-[300px] w-full object-cover"/>

            <h1 className="absolute top-[40%] right-[50%] translate-x-[50%] z-[100] text-[23px] text-white font-bold md:text-4xl">
                { service }
            </h1>
        </div>
    )

}
