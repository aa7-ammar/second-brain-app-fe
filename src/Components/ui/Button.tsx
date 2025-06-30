export interface ButtonProps {
    variant : 'primary' | "secondary",
    size : "sm" | "md" | "lg",
    text : string,
    startIcon?: any,
    endIcon? : any,
    onClick? : () => void
}

const variantStyles = {
    "primary" : "bg-[#241d49] text-[#e1e5fe]",
    "secondary" : "bg-[#c9cdfc] text-[#241d49]"
}

const defaultStyle = "rounded-2xl cursor-pointer flex "
const sizeStyle = {
    "sm" : "px-4 py-2",
    "md" : "px-6 py-4",
    "lg" : "px-8 py-6"
}



export const Button = (props : ButtonProps) => {
    
        return <button className={`${variantStyles[props.variant]} ${defaultStyle} ${sizeStyle[props.size]}`}>
            {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text}
            </button>
    
    
}

