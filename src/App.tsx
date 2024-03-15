
import Home from './pages/home/Home'
import NavbarSimple from './components/Navbar/NavBar'
import { useState, useEffect } from 'react';
import RotateWarning from './pages/rotateWarning/RotateWarning';

export default function App() {

  const [orientation, setOrientation] = useState(screen.orientation);

  useEffect(() => {
    window.scrollTo(0, 1);
    const handleOrientationChange = () => {
      setOrientation(screen.orientation);
    };

    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <>
    {orientation.type === 'landscape-primary' ? (<div><NavbarSimple/> <Home/></div>) : (<RotateWarning/>)}
    </>
      )
}
