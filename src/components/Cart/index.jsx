import styles from "./Cart.module.scss";
import { useContext, useState } from "react";
import { AppContext } from "../../context";
import Info from "../Info/Info";
import CustomCard from "./CustomCard";

function Cart({ isOpened }) {
  const {
    toggleShowCart: closeCart,
    cartItems: items,
    totalPrice,
    setCartItems,
  } = useContext(AppContext);
  const [isOrder, setOrder] = useState(false);
  isOpened
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div className={`${styles.cart} ${isOpened ? styles.cartVisible : ""}`}>
      <div className={`${styles.side} ${isOpened ? styles.sideVisible : ""}`}>
        <div className={styles.header}>
          <h2>Корзина</h2>
          <button
            className={styles.closeBtn}
            onClick={() => {
              closeCart();
              document.body.style.overflow = "auto";
            }}
          >
            <img src="/assets/icons/close.svg" alt="Закрыть корзину" />
          </button>
        </div>
        <div className={styles.cards}>
          {!!items.length &&
            !isOrder &&
            items.map((item) => <CustomCard key={item.id} val={item} />)}
          {!items.length && !isOrder && (
            <Info
              img="/assets/imgs/cart/empty.jpg"
              title="Корзина пустая"
              text="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
              onClickBtn={closeCart}
            />
          )}
          {isOrder && (
            <Info
              img="/assets/imgs/cart/order.jpg"
              title="Заказ оформлен"
              text="Ваш заказ скоро будет передан курьерской доставке"
              onClickBtn={() => {
                closeCart();
                setOrder(false);
              }}
            />
          )}
        </div>
        {items.length > 0 && (
          <div className={styles.total}>
            <div className={styles.totalWrapper}>
              <div className={styles.totalItem}>
                <span>Итого:</span>
                <span></span>
                <span>{totalPrice} руб.</span>
              </div>
              <div className={styles.totalItem}>
                <span>Налог 5%:</span>
                <span></span>
                <span>{(totalPrice * 0.05).toFixed(2)} руб.</span>
              </div>
            </div>
            <button
              className={styles.totalSendBtn}
              onClick={() => {
                setOrder(true);
                setCartItems([]);
              }}
            >
              <span>Оформить заказ</span>
              <img src="/assets/icons/arrow-right.svg" alt="Оформить заказ" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
