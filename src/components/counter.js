// importing state so variables changes can render to the UI automatically
import {useState} from "react"

function Counter(){
    // state variable
    const [counter, setCounter] = useState(0);
    // function to add by one
    const handleClick = () => {
        setCounter(counter + 1)
    }
    // function to add by two
    const handleCountTwo = () => {
        setCounter(counter + 2)
    }
    // function for multiply by three
    const timesByThree = () => {
        setCounter(counter * 3)
    }
    return(
        <div>
            <h2>Counter 1: {counter}</h2>
            {/* setting click events to buttons */}
            <button onClick={handleClick}>Add By One </button>
            <button onClick={timesByThree}>Multiply By Three</button>
            <button onClick={handleCountTwo}>Add By Two</button>
        </div>
    )
}

export default Counter;