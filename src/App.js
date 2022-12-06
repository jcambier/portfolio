import './App.css';
import Bar from './Bar.js';
import Introduction from './Introduction';
import Pokemon from './Pokemon';
import Ricochet from './Ricochet';
import Iterative from './Iterative';
import Responsive from './Responsive';

function App() {
  return (
    <div className="App">
      <div className='portfolio-content'>
        <Bar></Bar>
        <Introduction></Introduction>
        <Pokemon></Pokemon>
        <Ricochet></Ricochet>
        <Iterative></Iterative>
        <Responsive></Responsive>
      </div>
    </div>
  );
}

export default App;
