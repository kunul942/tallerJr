import { Tilt } from "react-tilt"



export const GalleryCard = ({ card }) => {
    return (
        <div 
            className="bg-gray-100 p-6 rounded-xl flex-custom-services"
            data-aos="fade-up"
        >   
            <Tilt
                options={{max: 45, scale: 1, speed: 450}}
            >
                <div className="mt-4">    
                    <img 
                        src={ card.img } 
                        alt='image'
                        className="w-full h-[250px] object-cover mx-auto"
                    />
                </div>
            </Tilt>
        </div> 
    )
}
