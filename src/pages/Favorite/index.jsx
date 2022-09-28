import React, {useContext} from 'react';
import Card from "../../components/Card";
import {AppContext} from "../../context";
import styles from "./FavoritePage.module.scss"
import {Link} from "react-router-dom";
import Info from "../../components/Info/Info";

function FavoritePage() {
  const {favItems} = useContext(AppContext);

  return (
    <>
      {
        !!favItems.length && (
          <section className={styles.cards}>
            <div className={styles.header}>
              <Link to="/" className={styles.headerBackBtn}>
                <img src="/assets/icons/left.svg" alt="Назад"/>
              </Link>
              <h2 className={styles.headerTitle}>Избранное</h2>
            </div>
            <div className={styles.items}>
              {
                favItems.map(item => <Card key={item.id} val={item}/>)
              }
            </div>
          </section>
        )
      }
      {
        !favItems.length && (
          <div className={styles.empty}>
            <Info img="/assets/imgs/favorite/empty.jpg" title="Список избранных пуст"
                  text="Добавьте товары в избранное, чтобы они появились в этом разделе"/>
          </div>
        )
      }
    </>
  );
}

export default FavoritePage;
