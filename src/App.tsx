import './App.css'
import {useCounterStore} from "./store/store.ts";

function App() {
  const count = useCounterStore((state) => state.count) //This is essentially a selector for a piece of state.

  return (
    <>
    <div>
        The count is: {count}
    </div>
    </>
  )
}

export default App
