import Homepages from "./pages/Homepages";
import {Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='' element={<Homepages/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
