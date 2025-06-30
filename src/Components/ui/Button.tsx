export interface ButtonProps {
    variant : 'primary' | "secondary",
    size : "sm" | "md" | "lg",
    text : string,
    startIcon?: any,
    endIcon? : any,
    onClick? : () => void
}
export const Button = (props : ButtonProps) => {
    if(props.variant == "primary"){
        return <span className="bg-[#241d49] text-[#e1e5fe] rounded-2xl cursor-pointer p-2  ">{props.startIcon}{props.text}</span>
    }
    else if(props.variant == "secondary"){
        return <span className="bg-[#c9cdfc] text-[#241d49] rounded-2xl cursor-pointer p-2  ">{props.startIcon}{props.text}</span>
    }
}

