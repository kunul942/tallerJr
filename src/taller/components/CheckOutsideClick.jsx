import { useEffect, useRef } from "react"

export const CheckOutsideClick = ({ onCloseClick, children }) => {

    const ref = useRef( null );

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
        return() =>{
            document.removeEventListener("click", handleClickOutside, true)
        }
    }, [])

    const handleClickOutside = (event) =>{
        if( ref.current && !ref.current.contains( event.target ) ){
            onCloseClick && onCloseClick()
        }
    }

    if( !children ){
        return null
    }
    return (
        <div ref={ ref } >
            { children }
        </div>
    )
}



