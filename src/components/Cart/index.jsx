import styles from './Cart.module.scss';
import {useContext, useState} from "react";
import {AppContext} from "../../context";
import Info from "../Info/Info";

function Cart() {
  const {
    toggleShowCart: closeCart,
    cartItems: items,
    deleteFromCart: deleteItem,
    totalPrice,
    setCartItems
  } = useContext(AppContext);
  const [isOrder, setOrder] = useState(false);
  document.body.style.overflow = 'hidden';

  return (
    <div className={styles.cart}>
      <div className={styles.side}>
        <div className={styles.header}>
          <h2>Корзина</h2>
          <button className={styles.deleteBtn} onClick={() => {
            closeCart();
            document.body.style.overflow = 'auto';
          }}>×
          </button>
        </div>
        <div className={styles.cards}>
          {
            (!!items.length && !isOrder) && items.map(item => {
              return (
                <div className={styles.card} key={item.id}>
                  <img src={item.img} alt={item.title} className={styles.cardImage}/>
                  <div className={styles.cardHeader}>
                <span className={styles.cardHeaderTitle}>
                  {item.title}
                </span>
                    <span className={styles.cardHeaderPrice}>{item.price} руб.</span>
                  </div>
                  <button className={styles.deleteBtn} onClick={() => deleteItem(item)}>×</button>
                </div>
              );
            })
          }
          {
            (!items.length && !isOrder) &&
            <Info img="/assets/imgs/cart/empty.jpg" title="Корзина пустая"
                  text="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                  onClickBtn={() => {
                    document.body.style.overflow = 'auto';
                    closeCart();

                  }}/>
          }
          {
            isOrder &&
            <Info img="/assets/imgs/cart/order.jpg" title="Заказ оформлен"
                  text="Ваш заказ скоро будет передан курьерской доставке"
                  onClickBtn={() => {
                    document.body.style.overflow = 'auto';
                    closeCart();
                    setOrder(false);
                  }}/>
          }
        </div>
        {
          items.length > 0 && (
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
              <button className={styles.totalSendBtn} onClick={() => {
                setOrder(true);
                setCartItems([]);
              }}>
                <span>Оформить заказ</span>
                <img src="/assets/icons/arrow-right.svg" alt="Оформить заказ"/>
              </button>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Cart;
