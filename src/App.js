import './App.css';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import NavBar from './actress site/NavBar';
import Films from './actress site/Films';
import Bio from './actress site/Bio';
import SiteD from './actress site/SiteD';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path='/home' element={<SiteD/>}/>
      <Route path='/films' element={<Films/>}/>
      <Route path='/biography' element={<Bio/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
