import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { HomeCard } from "./HomeCard"
import { homeCard } from '../../../constant'




export const ChooseUs = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    

    return (
        <section 
            className="my-10 mx-auto w-11/12 md:my-[70px] xl:w-9/12 2xl:w-7/12"
            data-aos="fade-down"
        >
            <div className="mb-12 md:mb-[80px]">
                <h1 className="text-2xl font-bold text-center md:text-3xl">
                    ¿Por qué elegirnos?
                </h1>
                <p className="text-center text-sm py-2 text-gray-500 text-xl">
                    Encuentra todo lo que necesitas en enderezado y pintura
                </p>
            </div>

            <div className="flex flex-col gap-4 md:flex-row flex-wrap">
                {
                    homeCard.map( card =>(
                        <HomeCard 
                            key={ card.id }
                            card={ card }
                        />
                    ))
                }
            </div>
        </section >
    )
}
