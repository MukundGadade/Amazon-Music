import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Podcasts } from './pages/Podcasts';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Library } from './pages/Library';
// import PremiumFeatures from './components/PremiumFeatures';
// import { Suspense, lazy, useState } from 'react';

// Lazy import/Lazy Loading
// const PremiumFeatures = lazy(() => import('./components/PremiumFeatures'));

function App() {

  // const [isPremium, setIsPremium] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <div style={{marginTop : '6rem'}}></div>

      {/* <button onClick={() => setIsPremium(true)}>Switch to Premium</button>
      {isPremium && 
        // <PremiumFeatures />
        <Suspense fallback={<div>Loading Premium...</div>}>
          <PremiumFeatures />
        </Suspense>
      } */}

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
