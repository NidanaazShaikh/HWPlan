import './App.css';
import HomeWorkForm from './components/HomeWorkForm'
import NavBar from './components/Navbar';
import Footer from './components/Footer'
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const updateBodyHeight = () => {
      document.body.style.height = `${window.innerHeight}px`;
    };
    window.addEventListener('resize', updateBodyHeight);
    updateBodyHeight();

    return () => {
      window.removeEventListener('resize', updateBodyHeight);
    };
  }, []);

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar />
      <main style={{ flex: 1 }}>
        <HomeWorkForm />
      </main>
      <Footer />
    </div>
  );
}


export default App;
