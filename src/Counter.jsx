import React, {useState} from 'react';

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    } 

    const decrement = () => {
        setCount(count - 1);
    } 

    const reset = () => {
        setCount(0);
    } 

    return( <>
            <h4 className='Counter-comment'>*2) Learnt how a useState Hook works and built a <b><i><u>Counter App</u> in React</i></b>*</h4>
            <div className='counter-container'>
                <h1 className='counter-text1'><b>Counter App</b></h1>
                <h5 className='counter-text2' ><i>(using React)</i></h5>
                <p className="count-display">{count}</p>
                <button className='counter-button' onClick={decrement} >Decrement</button>
                <button className='counter-button' onClick={reset} >Reset</button>
                <button className='counter-button' onClick={increment} >Increment</button>
            </div>
            </>);
}

export default Counter;