export const Input = ({reference , placeholder} : {reference? : any ; placeholder : string}) => {
    return <div>
        <input placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded m-2" ref={reference}></input>
    </div>
}