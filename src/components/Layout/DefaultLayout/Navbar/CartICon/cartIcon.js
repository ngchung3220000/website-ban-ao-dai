import "./CartIcon.scss";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem/cartItem";
import { clickCart } from "../../../../../redux/Slices/navbarSlice";
import { UseOutsideClick } from "../components/useOutsideClick";

export default function CartIcon() {
  const disPatch = useDispatch();
  const visCart = useSelector((state) => state.navbar.cart);

  const cartList = useSelector((state) => state.cart);

  console.log(cartList);

  const ref = UseOutsideClick(() => disPatch(clickCart(false)));

  return (
    <div className={`cart-container ${visCart ? "visible" : "hidden"}`}>
      <div ref={ref} className={`cart-wrap `}>
        <h3>GIỎ HÀNG</h3>
        <div className="divider"></div>
        <p>Chưa có sản phẩm trong giỏ hàng</p>
        <div className="cart-content">
          <ul className="cart-list">
            {_.map(cartList, (product, index) => {
              return <CartItem key={index} product={product} />;
            })}
          </ul>
          <p className="total-price">
            Tổng số phụ: <span>30000 ₫</span>
          </p>
          <p className="buttons">
            <a href="/gio-hang" className="button">
              XEM GIỎ HÀNG
            </a>
            <a href="/thanh-toan" className="button">
              THANH TOÁN
            </a>
          </p>
        </div>
      </div>
      <button className="close-cart" onClick={() => disPatch(clickCart(false))}>
        X
      </button>
    </div>
  );
}
