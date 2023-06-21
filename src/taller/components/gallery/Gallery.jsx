
import { GalleryCard } from './GalleryCard'

import { galleryCard } from '../../../constant'


export const Gallery = () => {

    return (
        <section 
            className="my-10 mx-auto w-11/12 md:my-[70px] xl:w-9/12 2xl:w-7/12"
        >

            <div className="flex flex-col gap-4 flex-wrap md:flex-row">
                {
                    galleryCard.map( card =>(
                        <GalleryCard 
                            key={ card.id }na
                            card={ card }
                        />
                    ))
                }
            </div>
        </section >  
    )
    
}
