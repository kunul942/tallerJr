import { useEffect, useState } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

import { CheckOutsideClick } from '../taller/components/CheckOutsideClick';

import { imageGallery1 } from '../assets/'
import { mainImage10 } from '../assets/'
import { mainImage9 } from '../assets/'

export const Test = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  

  const [open, setOpen] = useState( false );
  
  const onOpenClick = () =>{
    setOpen( true )
  }

  const onCloseClick = () =>{
    setOpen( false )
  }

  return ( 
    <div>
      <CheckOutsideClick onCloseClick={ onCloseClick }>
        <div className="container" data-aos="fade-down">
          <button onClick={ onOpenClick } className="ground mx-2">
            Ground Floor
          </button>
          <button onClick={ onCloseClick }>Cerrar</button>
        </div>
        <div>
          { 
            open && (
              <img 
                src={ imageGallery1 }
                alt="image" 
              />
            )
          }
        </div>
      </CheckOutsideClick>
    </div>
  );
};
