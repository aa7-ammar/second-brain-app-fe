import { Logo } from "../../Icons/Logo"
import { TwitterIcon } from "../../Icons/X"
import { YoutuebIcon } from "../../Icons/Youtube"
import { SidebarItem } from "../SidebarItems"

export const Sidebar = () => {
    return <div className="h-screen w-72 bg-[#ededed] fixed left-0 top border-r-2 border-opacity-25 pl-6">
        <div className="flex text-2xl pt-4 pb-2 pr-2 items-center mb-2 border-b border-gray-400 ">
            <div className="pr-2 text-[#6249df] ">
                <Logo/>
                </div>
            Brainly
        </div>
        <SidebarItem icon={<TwitterIcon/>} text="X"/>
        <SidebarItem icon={<YoutuebIcon/>} text="Youtube"/>
    </div>
}