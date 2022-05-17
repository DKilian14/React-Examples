import './App.css';
import NavBar from'./components/The_Navbar'
import MainBlurb from './components/The_Main_Blurb'
import Card from './components/The_Card'
import Footer from './components/The_Footer'
import data from './data'


export default function App() {
  const cards = data.map(item=>{
    return(
      <Card
        key={item.id}
        {...item}
      />
          )
  })
    return (
      <div className="App">
        <NavBar />
        <section className="Cards-List">
          {cards}
        </section>
        <Footer />
      </div>
      );
    }
