import { direccion, telefono } from "../../../assets"


export const Contact = () => {

  return (
    <div className="w-9/12 mx-auto my-[60px]">
            <div className="flex flex-col gap-10">

                <h1 className="text-2xl font-bold text-center md:text-3xl">¿Tienes algún vehículo que quieras como nuevo? <br/> ¡Contáctanos!</h1>
                {/* <img src="" alt="" /> */}
                <div className="flex items-center shadow-lg">
                    <img 
                        src={ direccion }
                        alt="direccion" 
                        className="h-[50px] m-2"
                    />
                    <div className="m-4">
                        <h2 className="text-xl font-bold hover:text-red-700">12 av A 2-47 la arada zona 4 villa nueva</h2>
                        <p className="text-gray-500 text-xl mt-2">¡Te esperamos!</p>
                    </div>
                </div>
                <div className="flex items-center shadow-lg">
                    <img    
                        src={ telefono }
                        alt="telefono"
                        className="h-[50px] my-4 mx-2"
                    />
                    <div className="m-4">
                        <a href={`tel:+502 56354038`} className="text-xl font-bold hover:text-red-700">+502 56354038</a>
                        <p className="text-gray-500 text-xl mt-2">¡Llamanos!</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
