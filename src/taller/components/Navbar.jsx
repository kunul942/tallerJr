import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import AOS from 'aos'
import 'aos/dist/aos.css'


import { 
    // navbar
    phone,
    menu,
    close,
    logo,
    whatsappTest,
    location,
} from '../../assets'

import { navLinks, personalInfo } from '../../constant'

import { CheckOutsideClick } from './CheckOutsideClick'




export const Navbar = () => {

    const [toggle, setToggle] = useState(true)
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    const toggleAfirmative = toggle ? menu : 'hidden' 
    const toggleNegative = !toggle ? close : 'hidden' 

    const onOpenClick = () =>{
        setToggle( false )
    } 
    const onCloseClick = () =>{
        setToggle( true )
    }

    return( 
        <>
            {/* ---PART - 1--- */}
            {/* section 1 - contacto */}
            <div data-aos="fade-down">
                <section className="flex items-center mx-auto py-2 w-11/12 xl:w-9/12 2xl:w-7/12">
                    <p className="mr-auto text-gray-500">{ personalInfo.email }</p>
                    <div className="flex">
                        <a 
                            href="https://wa.me/50256354038" 
                            target="_blank" 
                        >
                            <img 
                                src={ whatsappTest }
                                alt="whastsapp" 
                                className="w-[30px] h-[30px] mx-2"
                            />
                        </a>
                    </div>
                </section>
                <hr />  
                
                {/* section - 2 - logo e informacion */}

                <section className="flex items-center justify-between mx-auto w-11/12 xl:w-9/12 2xl:w-7/12 fixed-custom">
                    <Link to="inicio">
                        <img 
                            className="h-[120px] w-[150px] mr-auto"
                            src={ logo }
                            alt="logo" 
                        />
                    </Link> 


                    <img 
                        className={`h-[60px w-[60px] ${ toggleAfirmative } md:hidden`}
                        src={ menu } 
                        alt="menu"
                        onClick={ onOpenClick } 
                    />
                    <img 
                        className={`h-[60px w-[60px] ${ toggleNegative } md:hidden`}
                        src={ close } 
                        alt="close"
                        onClick={ onCloseClick } 
                    />

                    {/* from md*/}
                    <div className="hidden md:flex items-center w-[200px] mr-4 xl:w-[300px] mr-0">
                        <img 
                            src={ location } 
                            alt="location" 
                            className="h-45px] w-[45px] mr-2 border-2 border-red-700 rounded-full p-2 hover:border-red-700"
                        />
                        <h2 className="text-gray-600">{ personalInfo.direction }</h2>
                    </div>
                    <div className="hidden md:flex items-center mr-4 xl:mr-8">
                        <img 
                            src={ phone } 
                            alt="phone" 
                            className="h-[45px] w-[45px] mr-2 border-2 border-red-700 rounded-full p-2 hover:border-red-700"
                        />
                        <a href={`tel:${ personalInfo.phone }`} className="font-bold text-base text-blue-900 py-2">{ personalInfo.phone }</a>
                    </div>

                    <Link
                        to="/servicios"
                        className="hidden md:flex items-center justify-center text-sm text-white bg-red-600 h-[50px] w-[130px] rounded-3xl hover:bg-slate-800">
                        SERVICIOS
                    </Link>

                </section>
            </div>
            <h1 className="h-[20px] w-full bg-gray-200 md:hidden"></h1>


            {/* part - 2 */}
            {/* desktop - links para las paginas*/}
            <div 
                className="hidden md:flex bg-gray-100 py-4" 
                data-aos="fade-down"    
            >
                <ul className="hidden md:flex items-center mx-auto w-11/12 xl:w-9/12 2xl:w-7/12">
                    {
                        navLinks.map( link =>(
                            <div key={ link.id }>
                                <li className="p-2 text-sm text-center hover:text-red-700 hover:font-bold cursor-pointer">   
                                    <Link to={`/${ link.id }`}>{ link.title }</Link>
                                </li>
                            </div>
                        ))
                    }

                    <Link
                        to='/contacto' 
                        className="hidden md:flex items-center justify-center text-sm text-white bg-blue-900 h-[50px] w-[120px] rounded-3xl hover:bg-blue-500 ml-auto">
                        COTIZAR
                    </Link>
                </ul>
            </div>


            {/* mobile */}
            { !toggle  && (
                    <CheckOutsideClick onCloseClick={ onCloseClick }> 
                        <div 
                            className="w-9/12 fixed top-0 bg-white shadow-lg h-screen overflow-y-scroll z-[999]"
                            data-aos="fade-right"
                        >   
                            <div>
                                <img 
                                    className="h-[150px] w-[250px] mx-auto"
                                    src={ logo }
                                    alt="logo" 
                                />
                                <h1 className="text-2xl text-gray-500 text-center p-4">Menu</h1>
                                <hr />
                            </div>
                            
                            <ul>
                                {
                                    navLinks.map( link =>(
                                        <div key={ link.id }>
                                            <li className="p-4 hover:text-red-700 hover:bg-gray-100 hover:font-bold cursor-pointer">   
                                                <Link to={`/${ link.id }`}>{ link.title }</Link>
                                            </li>
                                            <hr />
                                        </div>
                                    ))
                                }
                            </ul>
                                
                            <div>    
                                <div className="flex items-center p-4">
                                    <img 
                                        src={ phone } 
                                        alt="phone" 
                                        className="h-[50px] w-[50px] mr-2 border-2 border-red-700 rounded-full p-2 hover:border-red-700"
                                    />
                                    <a href={`tel:${ personalInfo.phone }`} className="hover:font-bold">{ personalInfo.phone }</a>
                                </div>

                                <div className="flex items-center p-4">
                                    <img 
                                        src={ location } 
                                        alt="location" 
                                        className="h-50px] w-[50px] mr-2 border-2 border-red-700 rounded-full p-2 hover:border-red-700"
                                    />
                                    <h2 className="hover:font-bold">{ personalInfo.direction }</h2>
                                </div>
                            </div>
                        </div>
                    </CheckOutsideClick>
                )
            }

        </>
        
    )

}
