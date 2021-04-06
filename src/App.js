import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../src/actions'

function App() {
  const coco = useSelector(state => state.counter)
  const dispatch = useDispatch()
      return (
    <div className="App">
      <h1>TEMPLATE REACT REDUX</h1>
      <h3>Counter {coco} </h3>
      <button onClick={() => dispatch(increment())}> +1 </button>
      <button onClick={() => dispatch(decrement())}> -1 </button>
      
    </div>
  );
}

export default App;
