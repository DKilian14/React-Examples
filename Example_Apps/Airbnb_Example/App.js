import './App.css';
import NavBar from'./components/The_Navbar'
import MainCollage from './components/The_Main_Collage'
import MainBlurb from './components/The_Main_Blurb'
import Card from './components/The_Card'
import Footer from './components/The_Footer'
import data from './data'

export default function App() {
  const cards = data.map(item =>{
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
        <MainCollage />
        <MainBlurb />
        <section className="cards-list">
          {cards}
        </section>
        <Footer />
      </div>
      );
    }
