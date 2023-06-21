import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


export const AnimationAOS = () => {

    useEffect(() => {
      AOS.init({ duration: 3000 })

    }, [])
    




    return (
        <>
            <h1>Fade</h1>
            <div className='animation' data-aos="fade-up">Test</div>
            <div className='animation' data-aos="fade-down">Test</div>
            <div className='animation' data-aos="fade-right">Test</div>
            <div className='animation' data-aos="fade-left">Test</div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h1>Flip</h1>
            <div className='animation' data-aos="flip-right">Test</div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h1>Zoom animation</h1>
            <div className='animation' data-aos="zoom-in">Test</div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            
        </>
    )
}
