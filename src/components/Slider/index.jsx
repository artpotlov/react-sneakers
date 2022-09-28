import styles from './Slider.module.scss';

function Slider() {
  return (
    <section className={styles.slider}>
      <div className={styles.buttonLeft}>
        <img src="/assets/icons/slider-left.svg" alt="Предыдущий"/>
      </div>
      <div className={styles.track}>
        <img src="/assets/imgs/slider/slide 1.png" alt="Slide 1"/>
      </div>
      <div className={styles.buttonRight}>
        <img src="/assets/icons/slider-right.svg" alt="Следующий"/>
      </div>
    </section>
  );
}

export default Slider;
