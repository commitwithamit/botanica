import cart from "../assets/img/cart.svg";

export function Message({text}) {
  console.log("msg: ", text);
  return (
    <div className="popup-msg">
        {text} <img src={cart} alt="cart icon" />
    </div>
  )
}
