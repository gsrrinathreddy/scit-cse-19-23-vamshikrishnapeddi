import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Aboutme from './pages/Aboutme';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import Qualifications from './pages/Qualifications';
import Skills from './pages/Skills';


function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <Navbar/>
         <Routes>
          <Route path="Aboutme" element={<Aboutme/>  }/>
          <Route path="Experience" element={<Experience/>  }/>
          <Route path="Hobbies" element={<Hobbies/>  }/>
          <Route path="Qualifications" element={<Qualifications/>  }/>
          <Route path="Skills" element={<Skills/>  }/>
           
         </Routes>
        </BrowserRouter>
     </div>
  );
}

export default App;
