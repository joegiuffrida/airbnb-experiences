import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroImage}>
        <img src="/photo-collage.png" alt="hero photo collage" />
      </div>
      <div className={styles.heroCopy}>
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts--all
          without leaving home
        </p>
      </div>
    </section>
  );
};

export default Hero;
