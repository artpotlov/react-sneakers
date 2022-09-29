import React from 'react';
import styles from './Info.module.scss';
import {Link} from "react-router-dom";

function Info({img, title, text, onClickBtn = null}) {
  return (
    <div className={styles.info}>
      <img src={img} alt="Изображение статуса"/>
      <h2>{title}</h2>
      <p>{text}</p>
      {
        !onClickBtn && <Link to="/">
          <img src="/assets/icons/arrow-left.svg" alt="На главную"/>
          <span>На главную</span>
        </Link>
      }
      {
        !!onClickBtn &&
        <button onClick={onClickBtn}>
          <img src="/assets/icons/arrow-left.svg" alt="Вернуться назад"/>
          <span>Вернуться назад</span>
        </button>
      }
    </div>
  );
}

export default Info;
