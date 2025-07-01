// import { useState } from "react"

import { CrossIcon } from "../../Icons/Cross"
import { Button } from "./Button"
import { Input } from "./Input"

export const ContentModel = ({open , onClose }) => {
    // const [open , setOpen] = useState(false);
    return <div>
        { open && <div className="w-screen h-screen bg-[#e1e5fe] fixed top-0 left-0 opacity-80 flex justify-center z-10" >
            <div className="flex flex-col justify-center">
                <span className="bg-[#f7f7f7] opacity-100 rounded p-4 z-20 shadow-md">
                    <div className="flex justify-end hover:cursor-pointer" onClick={onClose}>
                        <CrossIcon/>
                    </div>
                    <div>
                        <Input placeholder={"Title"}/>
                        <Input placeholder= {"Link"}/>
                    </div>
                    <div className="flex justify-center">
                        <Button variant="primary" size="md" text="Submit"/>
                    </div>
                </span>
            </div>
            
            </div>}
            
            
            
    </div>
        
    
}