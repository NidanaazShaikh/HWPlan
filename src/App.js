import './App.css';
import HomeWorkForm from './components/HomeWorkForm'
import NavBar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar/>
        <main style={{ flex: 1 }}>
        <HomeWorkForm/>
        </main>
    <Footer/>
     </div>
  );
}

export default App;
