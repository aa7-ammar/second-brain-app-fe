import { ShareIcon } from "../Icons/Share"

interface CardProps{
    title : string,
    link : string,
    type : "twitter" | "youtube"
}

export const Card = ({title , link , type} : CardProps) => {
    return <div className="bg-white max-w-72 p-4 rounded-lg shadow-md border border-gray-200 min-h-48  ">
        <div className="flex justify-between">
            <div className="flex items-center text-md">
                <div className="text-gray-500 pr-2">
                    <ShareIcon size={"md"}/>
                </div>
                {title}
            </div>
            <div className="flex items-center">
                <div className="text-gray-500 pr-2">
                    <a href={link} target="_blank">
                    <ShareIcon size={"md"}/>
                    </a>
                </div>
                <div className="text-gray-500 pr-2">
                    <ShareIcon size={"md"}/>
                </div>

            </div>

        </div>
        <div className="mt-4">
            {type === "youtube" && <iframe className="w-full " src={link.replace("watch" , "embed").replace("?v=" , "/")}
                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
            
            
            {type==="twitter" && <blockquote className="twitter-tweet"><a href={link.replace("x.com" , "twitter.com")}></a></blockquote>}

                
        </div>
    </div>
}