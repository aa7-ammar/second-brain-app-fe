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
    "primary" : "bg-[#241d49] text-[#e1e5fe]",
    "secondary" : "bg-[#c9cdfc] text-[#241d49]"
}

const defaultStyle = "rounded-2xl cursor-pointer flex "
const sizeStyle = {
    "sm" : "px-2 py-2 text-sm",
    "md" : "px-4 py-2 text-md",
    "lg" : "px-8 py-4 text-xl"
}



export const Button = (props : ButtonProps) => {
    
        return <button className={`${variantStyles[props.variant]} ${defaultStyle} ${sizeStyle[props.size]} `}>
            <div className="flex items-center">
                {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
                {props.text} 
                {props.endIcon ? <div className="pl-2">{props.endIcon}</div> : null}
            </div>
        </button>
    
    
}

