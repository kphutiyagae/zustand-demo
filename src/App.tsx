import './App.css'
import {useCounterStore} from "./store/store.ts";

function App() {
  const count = useCounterStore((state) => state.count) //This is essentially a selector for a piece of state.
  const increment = useCounterStore(state => state.increment);
  const decrement = useCounterStore(state => state.decrement);

  return (
    <>
    <div>
      <p>The count is: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
    </>
  )
}

export default App
