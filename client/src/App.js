
import { useEffect, useState } from 'react';
import './assets/css/sass/style.scss';
import CreateTalao from "./components/CreateTalao";

function App() {

const [msg, setMSG] = useState(null);

useEffect(()=>{
  fetch('/api')
  .then((res)=>res.json())
  .then((data)=> setMSG(data.message))
}

  );

  return (
    <div className="container">
   <p>{!msg ? "Loading..." : msg}</p>
      <CreateTalao/>
    </div>
  );
}

export default App;
