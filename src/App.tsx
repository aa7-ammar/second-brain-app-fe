
import './App.css'
import { Button } from './Components/ui/Button';
import { PlusIcon } from './Icons/Plus';

function App() {
  

  return (<>
  
  
  <Button variant = {"secondary"} size = {"sm"} text = {"submit"} startIcon={<PlusIcon size='lg'/>} />
  <Button variant = {"primary"} size = {"md"} text = {"submit"} startIcon={"icon2"}/>
  <Button variant = {"secondary"} size = {"sm"} text = {"submit"} startIcon={"icon3"}/>
  </>
  );
}

export default App
