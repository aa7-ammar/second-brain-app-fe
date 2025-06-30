
import './App.css'
import { Button } from './Components/ui/Button';
import { PlusIcon } from './Icons/Plus';
import { ShareIcon } from './Icons/Share';

function App() {
  

  return (<>
  
  
  <Button variant = {"secondary"} size = {"sm"} text = {"submit"} startIcon={<PlusIcon size='lg'/>} />
  <Button variant = {"primary"} size = {"md"} text = {"submit"} endIcon={<ShareIcon size='md'/>}/>
  <Button variant = {"secondary"} size = {"sm"} text = {"submit"} />
  <Button variant = {"primary"} size = {"sm"} text = {"submit"} endIcon={<ShareIcon size='md'/>}/>
  </>
  );
}

export default App
