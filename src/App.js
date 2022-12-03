import './App.css';
import Bar from './Bar.js';
import Introduction from './Introduction';
import Pokemon from './Pokemon';
import Ricochet from './Ricochet';

function App() {
  return (
    <div className="App">
      <div className='portfolio-content'>
        <Bar></Bar>
        <Introduction></Introduction>
        <Pokemon></Pokemon>
        <Ricochet></Ricochet>
      </div>
    </div>
  );
}

export default App;
