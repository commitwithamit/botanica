// import cart from "../assets/img/cart.svg";
import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { clearNotification } from "../store/slices/addToCart";

export function Message() {
  let notification = useSelector(state => state.cart.notification);
  const dispatch = useDispatch();
  let [status, setStatus] = useState("");
  let [msg, setMsg] = useState("");


  useEffect(() => {
    if (notification !== null) {
      setMsg(notification.msg);
      setStatus("active");

      const showToast = setTimeout(() => {
        setStatus("hide");
      }, 4000);

      const clearTimer = setTimeout(() => {
        setMsg("");
        setStatus("");
        dispatch(clearNotification());
      }, 5000);

      return () => {
        clearTimeout(showToast);
        clearTimeout(clearTimer);
      }
    }
  }, [notification]);

  if (!msg || status === "") return null;
  return (
    <div className={`popup-msg ${status}`}>
      {msg} <RxCross2 style={{ cursor: "pointer" }} onClick={() => setStatus("hide")} />
    </div>
  )
}
