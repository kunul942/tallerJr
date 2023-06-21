import { useEffect } from "react"
import { Tilt } from "react-tilt"

import AOS from 'aos'
import 'aos/dist/aos.css'




export const HomeCard = ({ card }) => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])


    return (
        <div 
            className="bg-gray-100 p-6 rounded-xl flex-custom-home"
            data-aos="fade-up"
        >
            <Tilt
                options={{max: 45, scale: 1, speed: 450}}
            >
                <img 
                    src={ card.img } 
                    alt='image'
                className="rounded-xl w-screen h-[170px] sm:h-[200px]"
                />
                <div className="mt-4">    
                    <h1 className="text-3xl text-gray-400 font-bold mb-4">
                        { card.id }
                    </h1>
                    <h2 className="text-xl font-bold mb-4">
                        { card.title }
                    </h2>

                    <p className="text-sm text-gray-800">
                        { card.desc }
                    </p>
                </div>
            </Tilt>
        </div>   
    )
}
