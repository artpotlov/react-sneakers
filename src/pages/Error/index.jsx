import React from 'react';
import Info from "../../components/Info/Info";
import styles from './ErrorPage.module.scss';

function ErrorPage() {
  return (
    <div className={styles.error}>
      <Info img="/assets/imgs/error/error.jpg" title="Упс!" text="Такой страницы нет"/>
    </div>
  );
}

export default ErrorPage;
