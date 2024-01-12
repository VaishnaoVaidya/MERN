import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Read from './Components/Read';
import Update from './Components/Update';
import Create from './Components/Create';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Create />} />
        <Route exact path="/all" element={<Read/>} />
        <Route exact path="/update" element={<Update/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
