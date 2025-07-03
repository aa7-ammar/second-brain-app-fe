import { useState } from "react";
import "../App.css";
import { Card } from '../Components/ui/Card';
import { ContentModel } from '../Components/ui/AddContentModal';
import { Button } from '../Components/ui/Button';
import { PlusIcon } from '../Icons/Plus';
import { ShareIcon } from '../Icons/Share';
import { Sidebar } from '../Components/ui/Sidebar';


export const Dashboard = () => {
        const [openModel , setOpenModel] = useState(false);
        
        return <div>
                <Sidebar/>
        
                <div className='p-4 ml-72 min-h-screen bg-[#f7f7f7]'>
                    <ContentModel open = {openModel} onClose = {() => {setOpenModel(false)}} />
                        <div className='flex justify-end gap-4'>
                            <Button variant='secondary' size="md" text="Add content" startIcon={<PlusIcon size='md'/>} onClick={() => {setOpenModel(true)}}/>
                            <Button variant='primary' size="md" text="Share brain" startIcon={<ShareIcon size='md'/>}/>
                        </div>
    
    
                    <div className='flex gap-4 '>
                            <Card type="twitter" link="https://x.com/realmadrid/status/1940047750965625279" title="Winning cwc" />
                            <Card type="youtube" link="https://www.youtube.com/watch?v=U9OZ65GtK-w" title="Chaos" />
                    </div>
    
                </div>
                </div>

}