import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { ServicesCard } from "../"
import { serviceCard } from '../../../constant'




export const Services = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    

    return (
        <section 
            className="my-10 mx-auto w-11/12 md:my-[70px] sm:w-9/12 2xl:w-7/12"
        >

            <div className="flex flex-col gap-4 flex-wrap md:flex-row">
                {
                    serviceCard.map( card =>(
                        <ServicesCard 
                            key={ card.id }
                            card={ card }
                        />
                    ))
                }
            </div>
        </section >
    )
}
