import './App.css';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({type: 'INC'});
  };
  const decrement = () => {
    dispatch({type: 'DEC'});
  };
  const add = () => {
    dispatch({type: 'ADD', payload: 10});
  };
  return (
    <div className="App ">
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-500 md:text-5xl lg:text-6xl dark:text-white'>Counter App</h1>
      <h2 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-500 md:text-5xl lg:text-6xl dark:text-white'>{counter}</h2>
      <div className="space-x-6 items-stretch">
        <button className= 'bg-blue-400 hover:bg-blue-600 text-gray-200 font-semibold py-2 px-4 border border-gray-400 rounded shadow space-x-10' onClick={increment}>Increment</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={decrement}>Decrement</button>
        <button className='bg-blue-600 hover:bg-blue-900 text-gray-100 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={add}>Add 10</button>
      </div>
    </div>
  );
}

export default App;
