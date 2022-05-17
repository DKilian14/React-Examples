// import logo from './logo.svg';
import './App.css';
import NavBar from'./components/The_Navbar'
import Main from './components/The_Main'


function Footer() {
    return (
        <footer>
        </footer>
    )
}



function Page() {
    return (
        <div>
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
