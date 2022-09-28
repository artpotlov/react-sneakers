import styles from './Card.module.scss';
import {useContext} from "react";
import {AppContext} from "../../context";
import ContentLoader from "react-content-loader";

function Card({val}) {
  const {title, price, img} = val;
  const {isLoadingGoods, addToFav, addToCart, cartItems, favItems} = useContext(AppContext);

  function inCart(good) {
    return cartItems.map(item => item.id).includes(good.id);
  }

  function inFavorite(good) {
    return favItems.map(item => item.id).includes(good.id);
  }

  return (
    <div className={styles.card}>
      {
        isLoadingGoods &&
        <ContentLoader
          speed={1}
          width={150}
          height={187}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91"/>
          <rect x="0" y="107" rx="3" ry="3" width="150" height="15"/>
          <rect x="0" y="126" rx="3" ry="3" width="93" height="15"/>
          <rect x="0" y="163" rx="8" ry="8" width="80" height="24"/>
          <rect x="118" y="155" rx="8" ry="8" width="32" height="32"/>
        </ContentLoader>
      }
      {
        !isLoadingGoods && (
          <>
            <button className={styles.favoriteBtn} onClick={() => addToFav(val)}>
              <img
                src={inFavorite(val) ? '/assets/icons/favorite-card.svg' : '/assets/icons/unfavorite-card.svg'}
                alt={inFavorite(val) ? 'Удалить из избранных' : 'Добавить в избранное'}/>
            </button>
            <div className={styles.image}>
              <img src={img} alt={title}/>
            </div>
            <span className={styles.title}>{title}</span>
            <div className={styles.information}>
              <div className={styles.informationPriceBlock}>
                <span className={styles.informationPriceBlockTitle}>Цена:</span>
                <span className={styles.informationPriceBlockTotal}>{price} руб.</span>
              </div>
              <button className={styles.informationAddBtn} onClick={() => addToCart(val)}>
                <img
                  src={inCart(val) ? '/assets/icons/added.svg' : '/assets/icons/add.svg'}
                  alt={inCart(val) ? 'Удалить из корзины' : 'Добавить в корзину'}/>
              </button>
            </div>
          </>
        )
      }
    </div>
  );
}

export default Card;
