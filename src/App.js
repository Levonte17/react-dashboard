import Display from './components/Display';
import Nav from './components/Nav';
import Stat from './components/Stat';
import './App.css';

function App(props) {
  return (
    <div className="App">
     <Nav />
     <section>
      <Stat title="Reviews" data={['1,281']} />
      <Stat title="Average Rating" data={['4.6']} />
      <Stat title="sentiment Analysis" data={['960',<br />, '122', <br />, '321']} />
     </section>
     <Display title="Website Visiters" data={['821']} />
    </div>
  );
}

export default App;
