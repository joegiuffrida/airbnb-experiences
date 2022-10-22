import styles from './contact.module.css';

const Contact = ({ name, phone, email }) => {
  return (
    <div className={styles.contactCard}>
      <h3>{name}</h3>
      <div className={styles.infoGroup}>
        <p>{phone}</p>
      </div>
      <div className={styles.infoGroup}>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Contact;
