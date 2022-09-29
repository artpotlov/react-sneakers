import React, { useContext, useState } from "react";
import Slider from "../../components/Slider";
import Card from "../../components/Card";
import styles from "./HomePage.module.scss";
import { AppContext } from "../../context";

function Home() {
  const [searchVal, setSearchVal] = useState("");
  const { isLoadingGoods, goods } = useContext(AppContext);

  function changeSearchVal(event) {
    setSearchVal(event.target.value);
  }

  return (
    <>
      <Slider />
      <section className={styles.cards}>
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>Все кроссовки</h2>
          <div className={styles.headerSearchInput}>
            <span>
              <img src="/assets/icons/search.svg" alt="Search icon" />
            </span>
            <input
              type="search"
              placeholder="Поиск..."
              value={searchVal}
              onChange={changeSearchVal}
            />
          </div>
        </div>
        <div className={styles.items}>
          {isLoadingGoods &&
            Array(10)
              .fill(1)
              .map((skeleton, index) => <Card key={index} val={skeleton} />)}
          {!isLoadingGoods &&
            goods
              .filter((good) =>
                good.title.toLowerCase().includes(searchVal.toLowerCase())
              )
              .map((good) => <Card key={good.id} val={good} />)}
        </div>
      </section>
    </>
  );
}

export default Home;
