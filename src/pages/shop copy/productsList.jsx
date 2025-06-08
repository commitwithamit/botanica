// image
import plant from "../../assets/porducts/32.png";
import x from "../../assets/porducts/1.png";
import y from "../../assets/porducts/30.png";
import cartIcon from "../../assets/img/cart.svg";
import wishIcon from "../../assets/img/wishicon.svg";
import viewIcon from "../../assets/img/eye.svg";
import { SmallBtn } from "../../components";

export default function ProductList() {
    return (
        <>
            <div className="product-card">
                <img src={x} alt="" />
                <div className="card-info">
                    <h6>Calathea Plant</h6>
                    <h5>₹499/-</h5>
                    <div className="card-btns">
                        <SmallBtn info={{path:wishIcon, toolTip:true, msg:"Wishlist"}} />
                        <SmallBtn info={{path:cartIcon, toolTip:true, msg:"Add to cart"}} />
                        <SmallBtn info={{path:viewIcon, toolTip:true, msg:"Quick View", link:"/product"}} />
                    </div>
                </div>
            </div>
            <div className="product-card">
                <img src={y} alt="" />
                <div className="card-info">
                    <h6>Calathea Plant</h6>
                    <h5>₹499/-</h5>
                    <div className="card-btns">
                        <SmallBtn info={{path:wishIcon, toolTip:true, msg:"Wishlist"}} />
                        <SmallBtn info={{path:cartIcon, toolTip:true, msg:"Add to cart"}} />
                        <SmallBtn info={{path:viewIcon, toolTip:true, msg:"Quick View"}} />
                    </div>
                </div>
            </div>
            <div className="product-card">
                <img src={plant} alt="" />
                <div className="card-info">
                    <h6>Calathea Plant</h6>
                    <h5>₹499/-</h5>
                    <div className="card-btns">
                        <SmallBtn info={{path:wishIcon, toolTip:true, msg:"Wishlist"}} />
                        <SmallBtn info={{path:cartIcon, toolTip:true, msg:"Add to cart"}} />
                        <SmallBtn info={{path:viewIcon, toolTip:true, msg:"Quick View"}} />
                    </div>
                </div>
            </div>
            <div className="product-card">
                <img src={x} alt="" />
                <div className="card-info">
                    <h6>Calathea Plant</h6>
                    <h5>₹499/-</h5>
                    <div className="card-btns">
                        <SmallBtn info={{path:wishIcon, toolTip:true, msg:"Wishlist"}} />
                        <SmallBtn info={{path:cartIcon, toolTip:true, msg:"Add to cart"}} />
                        <SmallBtn info={{path:viewIcon, toolTip:true, msg:"Quick View"}} />
                    </div>
                </div>
            </div>
            <div className="product-card">
                <img src={y} alt="" />
                <div className="card-info">
                    <h6>Calathea Plant</h6>
                    <h5>₹499/-</h5>
                    <div className="card-btns">
                        <SmallBtn info={{path:wishIcon, toolTip:true, msg:"Wishlist"}} />
                        <SmallBtn info={{path:cartIcon, toolTip:true, msg:"Add to cart"}} />
                        <SmallBtn info={{path:viewIcon, toolTip:true, msg:"Quick View"}} />
                    </div>
                </div>
            </div>
            <div className="product-card">
                <img src={plant} alt="" />
                <div className="card-info">
                    <h6>Calathea Plant</h6>
                    <h5>₹499/-</h5>
                    <div className="card-btns">
                        <SmallBtn info={{path:wishIcon, toolTip:true, msg:"Wishlist"}} />
                        <SmallBtn info={{path:cartIcon, toolTip:true, msg:"Add to cart"}} />
                        <SmallBtn info={{path:viewIcon, toolTip:true, msg:"Quick View"}} />
                    </div>
                </div>
            </div>
        </>
    );
}