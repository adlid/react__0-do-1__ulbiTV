const { useState } = require("react")

const Counter  = function(){
    const [count, setCount] = useState(()=>0);
    function increment(){
        setCount((count)=>count + 1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}> Inc </button>
        </div>
    )
}
export default Counter