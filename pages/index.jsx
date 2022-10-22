import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/card/card.component';
import Contact from '../components/contact/contact.component';
import Hero from '../components/hero/hero.component';
import NavBar from '../components/navbar/navbar.component';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Hero />
      <Card />
      <Contact
        name="Mr. Whiskerson"
        phone="212-555-1234"
        email="whiskas@gmail.com"
      />
      <Contact name="Stewart" phone="916-555-1234" email="frisky@gmail.com" />
    </div>
  );
}
