import type { ReactElement } from "react"

export interface ButtonProps {
    variant : 'primary' | "secondary",
    size : "sm" | "md" | "lg",
    text : string,
    startIcon?: ReactElement,
    endIcon? : ReactElement,
    onClick? : () => void
}

const variantStyles = {
    "primary" : "bg-[#241d49] text-[#e1e5fe] border hover:bg-[#6249df]",
    "secondary" : "bg-[#c9cdfc] text-[#241d49] border hover:bg-[#6249df] hover:text-white"
}

const defaultStyle = "rounded-2xl cursor-pointer flex items-center font-normal "
const sizeStyle = {
    "sm" : "px-2 py-2 text-sm",
    "md" : "px-4 py-2 text-md",
    "lg" : "px-8 py-4 text-xl"
}



export const Button = (props : ButtonProps) => {
    
        return <button onClick={props.onClick}className={`${variantStyles[props.variant]} ${defaultStyle} ${sizeStyle[props.size]} `}>
            
                {props.startIcon ? props.startIcon : null}
                <span className="pr-1 pl-1 ">{props.text}</span> 
                {props.endIcon ?  props.endIcon : null}
            
        </button>
    
    
}

