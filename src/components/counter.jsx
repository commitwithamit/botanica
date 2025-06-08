import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(1);
    return (
        <div className="counter">
            <button 
            onClick={()=>setCount(count - 1)}
            disabled={count===1}
            className={`dec ${count===1 ? 'disable':''}`}
            >-</button>

            <span>
                {count}
            </span>

            <button 
            onClick={()=>setCount(count + 1)}
            disabled={count===10}
            className={`inc ${count===10 ? 'disable':''}`}
            >+</button>
        </div>
    )
}
