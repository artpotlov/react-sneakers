import React, {useContext} from 'react';
import styles from "./CustomCard.module.scss";
import {AppContext} from "../../context";

function CustomCard({val}) {
  const {title, price, img} = val;
  const {deleteFromCart: deleteItem} = useContext(AppContext);
  return (
    <div className={styles.card}>
      <img src={img} alt={title} className={styles.cardImage}/>
      <div className={styles.cardHeader}>
        <span className={styles.cardHeaderTitle}>{title}</span>
        <span className={styles.cardHeaderPrice}>{price} руб.</span>
      </div>
      <button className={styles.deleteBtn} onClick={() => deleteItem(val)}>
        <img src="/assets/icons/close.svg" alt="Удалить"/>
      </button>
    </div>
  );
}

export default CustomCard;
