import { useState } from "react";
export function Counter({ id, quantity, dispatch, incQuantity, decQuantity }) {
    // uplift the state to productdetail page and cart 
    const [count, setCount] = useState(quantity || 1);
    return (
        <div className="counter">
            <button
                onClick={() => {
                    setCount(count - 1);
                    dispatch(decQuantity(id));
                }}
                disabled={count === 1}
                className={`dec ${count === 1 ? 'disable' : ''}`}
            >-</button>

            <span>
                {count}
            </span>

            <button
                onClick={() => {
                    setCount(count + 1);
                    dispatch(incQuantity(id));
                }}
                disabled={count === 10}
                className={`inc ${count === 10 ? 'disable' : ''}`}
            >+</button>
        </div>
    )
}
