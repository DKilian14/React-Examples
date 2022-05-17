// import logo from './logo.svg';
import './App.css';
import NavBar from'./components/The_Navbar'
import Main from './components/The_Main'
import Header from './components/The_Header'
import Footer from './components/The_Footer'



function Page() {
    return (
        <div>
            <Header/>
            <NavBar />
            <Main />
            <Footer />
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <Page />
    </div>
  );
}

export default App;
