import "./assets/css/sass/style.scss";
import GerarTalaoPDF from "./components/GerarTalaoPDF"; 
function App() {


  return (
    <div className="container">

      <div className="bg_pages">
       <GerarTalaoPDF/>
      </div>
    </div>
  );
}

export default App;
