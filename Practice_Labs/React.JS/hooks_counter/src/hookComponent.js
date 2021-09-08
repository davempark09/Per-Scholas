import React, {useState} from 'react'

function Hooks() {

    const[number, setCount] = useState(0)
    return (
        <div>
            <button className="button" onClick={()=> setCount(number +1)}>Increase</button>
            <button className="button" onClick={()=> setCount(number +10)}>Increase By 10</button>
            <button className="button" onClick={()=> setCount(number +100)}>Increase By 100</button>
            <button className="button" onClick={()=> setCount(number -1)}>Decrease</button>
            <button className="button" onClick={()=> setCount(number -10)}>Decrease By 10</button>
            <button className="button" onClick={()=> setCount(number -100)}>Decrease By 100</button>
            <h1 className="number">{number}</h1>
        </div>
    )
}
export default Hooks