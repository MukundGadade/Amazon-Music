import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Podcasts } from './pages/Podcasts';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Library } from './pages/Library';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{marginTop : '6rem'}}></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/podcasts' element={<Podcasts />} />
        <Route path='/library' element={<Library />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
