import { mision, vision, } from "../../../assets"

import { about } from "../../../constant"


export const About = () => {
    return (
        <div className="w-9/12 mx-auto my-[60px]">
            <div className="flex flex-col gap-10">

                <h1 className="text-3xl font-bold">{ about.title }</h1>
                <p className="text-gray-500">{ about.p1 }</p>
                <p className="text-gray-500">{ about.p2 }</p>
                <div className="flex items-center shadow-lg">
                    <img 
                        src={ vision }
                        alt="vision" 
                        className="h-[70px] ml-2"
                    />
                    <div className="m-4">
                        <h2 className="text-xl font-bold">{ about.visionTitle }</h2>
                        <p className="text-gray-500 text-sm">{ about.visionDesc }</p>
                    </div>
                </div>
                <div className="flex items-center shadow-lg">
                    <img 
                        src={ mision }
                        alt="mision"
                        className="h-[60px] ml-2"
                    />
                    <div className="m-4">
                        <h2 className="text-xl font-bold">{ about.misionTitle }</h2>
                        <p className="text-gray-500 text-sm">{ about.misionDesc }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
