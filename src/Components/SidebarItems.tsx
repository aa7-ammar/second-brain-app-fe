import type { ReactElement } from "react"

export const SidebarItem = ({icon , text} : {
    icon : ReactElement,
    text : string
})=>{
    return <div className="flex text-gray-700 py-2">
        
        <div className="pr-2">{icon} </div>
        <div >{text} </div>
    </div>
}