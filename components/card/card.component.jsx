import styles from './card.module.css';

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <img src="/image-12" alt="picture of swimmer katie zaferes" />
      </div>
      <div>
        <img src="star" alt="rating star icon" />
        <p>5.0 (6) * USA</p>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <span>From $136</span> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
