import CarouselLibrary from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { ContactHome, LearnMore, ServicesHome } from ".."


export const Carousel = () => {

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};


    return (

        <div>  
            <CarouselLibrary 
                autoPlay={ true } 
                autoPlaySpeed={ 4000 } 
                infinite={ true }
                showDots={ true } 
                responsive={responsive}
            >   
                <LearnMore />
                <ServicesHome />
                <ContactHome />
            </CarouselLibrary>
        </div>
    )
}
