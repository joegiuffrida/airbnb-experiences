import styles from './card.module.css';
import Image from 'next/image';

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img
          src="/image-12.png"
          alt="picture of swimmer katie zaferes"
          className={styles.cardImage}
        />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.rating}>
          <img src="/star.png" alt="rating star icon" />
          <p>
            5.0 <span>(6) • USA</span>
          </p>
        </div>

        <p>Life lessons with Katie Zaferes</p>
        <p>
          <span className={styles.bold}>From $136</span> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
