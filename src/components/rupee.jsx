import { price } from "../utils/customFunctions";

export function Sp({ children }) {
    return (
        <>
            <sup className="rupee">₹</sup>{price(children)}
        </>
    )
}
export function Mrp({ children }) {
    return (
        <>
            <sup className="rupee">₹</sup><span>{price(children)}</span>
        </>
    )
}
