import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/card/card.component';
import Hero from '../components/hero/hero.component';
import NavBar from '../components/navbar/navbar.component';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Hero />
      <Card />
    </div>
  );
}
