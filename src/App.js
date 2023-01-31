import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './pages/about/About';
import Home from './pages/home/Home'
import { useSlime } from './hooks/useSlime';
import Work from './pages/work/Work';
import Contact from './pages/contact/Contact';
import Footer from './components/Footer';
import WorkPage from './pages/work/workpage/WorkPage';

function App() {

  const { slime } = useSlime()
  return (
    <div className="App flex-col-center-start">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={user !== null ? <Home /> : <Navigate to="/login" />  } /> */}
          <Route path="/" element={ <Home slime={slime} />} />
          <Route path="/work" element={ <Work /> } />
          <Route path="/contact" element={ <Contact />  } />
          <Route path="/about" element={ <About />  } />
          <Route path="/work/:workid" element={ <WorkPage />  } />
          <Route path="*" element={ <Navigate to="/" />  } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
