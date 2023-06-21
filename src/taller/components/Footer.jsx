import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { logo, imageFooter, locationFooter, phoneFooter, emailFooter } from '../../assets'

import { personalInfo, navLinks, services } from '../../constant'



export const Footer = () => {
    
    useEffect(()=>{
        AOS.init({ duration: 1000 })
    })

    return(
    
        <section 
            className='relative footer__image' 
            data-aos="fade-up"
        >
            <img
                src={imageFooter}
                alt="imageFooter"
                // className="h-[900px] w-full object-cover md:h-[650px]"/>
                className="h-[1000px] w-full object-cover md:h-[650px]"
            />
            <div className="absolute top-[15%] right-[50%] translate-x-[50%] z-[100] w-11/12 xl:w-9/12 2xl:w-7/12">
                <div className="text-white">
                    <div>
                        <img
                            src={ logo }
                            alt="logo"
                            className="h-[150px] mx-auto" />
                        <p className="text-xs mt-8 text-center text-gray-300 md:text-sm">
                            Somos el aliado perfecto tratando con una sola marca y el respaldo en <br />
                            cada trabajo de enderezado y pintura de los vehículos.
                        </p>
                    </div>
    
                    <div className="md:flex justify-between md:mt-[10px] ">
                        <div className="mt-6">
                            <h1 className="mb-2 font-bold">CONTÁCTENOS</h1>
                            <hr className="w-[70px]" />
                            <div className="flex mt-2">
                                <img
                                    src={locationFooter}
                                    alt="locationFooter"
                                    className="h-[25px] w-[25px] mr-2" />
                                <p className="text-xs text-gray-300 hover:text-red-700">{personalInfo.direction}</p>
                            </div>
                            <div className="flex mt-2">
                                <img
                                    src={phoneFooter}
                                    alt="phoneFooter"
                                    className="h-[25px] w-[25px] mr-2" />
                                <a href={`tel:${personalInfo.phone}`} className="text-xs text-gray-300 hover:text-red-700">{personalInfo.phone}</a>
                            </div>
                            <div className="flex items-center mt-2">
                                <img
                                    src={ emailFooter }
                                    alt="emailFooter"
                                    className="h-[25px] w-[20px] mr-4" />
                                <p className="text-xs text-gray-300 hover:text-red-700">{personalInfo.email}</p>
                            </div>
                        </div>
    
                        <div className="mt-6">
                            <h1 className="font-bold mt-2">LINKS</h1>
                            <hr className="w-[70px]" />
                            <ul> 
                                { navLinks.map(link => (
                                    <div key={ link.id }>
                                        <li className="text-xs text-gray-300 mt-2 hover:text-red-700">
                                            <Link to={`/${link.id}`}>{link.title}</Link>
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
    
                        <div>
                            <h1 className="font-bold mt-6">SERVICIOS</h1>
                            <hr className="w-[70px]" />
                            <ul>
                                { services.map( service =>(
                                    <div key={ service.id }>
                                        <li className="text-xs mt-2 text-gray-300 hover:text-red-700">
                                            <Link to={`/servicios`}>{ service.title }</Link>
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
    
                    <div className='flex justify-between'>
                        <p className='text-xs mt-16'>Copyright @ 2023 All Rights Reserved</p>
                        <p className='text-xs mt-16'>Política de privacidad</p>
                    </div>
    
                </div>
            </div>
    
        </section>
    )
}

