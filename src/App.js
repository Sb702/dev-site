import './App.css';
import Skills from './skills';
import About from './about';
import Menu from './menu';
import Hero from './hero';


function App() {


  return (
    <div className="App">
      <Menu />

      <Hero />
      
      <section className='about'>
        <About />
      </section>


    </div>
  );
}

export default App;