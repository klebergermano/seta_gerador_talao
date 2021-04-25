
import {useEffect, useStated} from "react";
import './assets/css/sass/style.scss';
import {saveAs} from "file-saver";


function App() {

const createPDF = ()=>{
  
  fetch('/create-pdf')
  .then(res => res.blob())
  .then((blob)=>{
    saveAs(blob, 'novo_talao.pdf');
  })

}

  return (
    <div className="container"> 

    <button onClick={createPDF}>Create PDF</button>
    </div>
  );
}

export default App;
