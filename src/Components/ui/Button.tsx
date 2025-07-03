import type { ReactElement } from "react"

export interface ButtonProps {
    variant : 'primary' | "secondary",
    size : "sm" | "md" | "lg",
    text : string,
    startIcon?: ReactElement,
    endIcon? : ReactElement,
    onClick? : () => void,
    fullWidth? : boolean,
    loading? : boolean
}

const variantStyles = {
    "primary" : "bg-[#241d49] text-[#e1e5fe] hover:bg-[#6249df]",
    "secondary" : "bg-[#c9cdfc] text-[#241d49] hover:bg-[#6249df] hover:text-white"
}

const defaultStyle = "rounded-lg cursor-pointer flex items-center font-normal hover:shadow-xl transition-all duration-300   "
const sizeStyle = {
    "sm" : "px-2 py-2 text-sm",
    "md" : "px-4 py-2 text-md",
    "lg" : "px-8 py-4 text-xl"
}



export const Button = (props : ButtonProps) => {
    
        return <button onClick={props.onClick}className={`${variantStyles[props.variant]} ${defaultStyle} ${sizeStyle[props.size]} ${props.fullWidth ? "w-full flex justify-center" : ""} ${props.loading ? "opacity-20 pointer-events-none" : ""}`}>
            
                {props.startIcon ? props.startIcon : null}
                <span className="pr-1 pl-1 ">{props.text}</span> 
                {props.endIcon ?  props.endIcon : null}
            
        </button>
    
    
}

