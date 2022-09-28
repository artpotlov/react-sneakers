import styles from './Header.module.scss';
import {useContext} from "react";
import {AppContext} from "../../context";
import {Link} from "react-router-dom";

function Header() {
  const {toggleShowCart, totalPrice} = useContext(AppContext);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/assets/imgs/header/logo.png" alt="React Sneakers"/>
        <div>
          <h1>REACT SNEAKERS</h1>
          <h2>Магазин лучших кроссовок</h2>
        </div>
      </Link>
      <nav className={styles.menu}>
        <ul>
          <li className={styles.menuCart} onClick={toggleShowCart}>
            <img src="/assets/icons/cart.svg" alt="Корзина"/>
            <span>{totalPrice} руб.</span>
          </li>
          <li><Link to="favorite"><img src="/assets/icons/favorite.svg" alt="Избранное"/></Link></li>
          <li><img src="/assets/icons/profile.svg" alt="Профиль"/></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
