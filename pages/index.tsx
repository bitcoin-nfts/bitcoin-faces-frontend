import Head from "next/head";
import styles from "../styles/Home.module.css";
import WalletConnectButton from "../components/wallet-connect-button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bitcoin Faces</title>
        <meta name="description" content="Bitcoin Faces" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Bitcoin Faces</h1>
        <WalletConnectButton />
      </main>
    </>
  );
}
