import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Countdown from "@/components/Countdown";
import group from "../img/group.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const targetDate = new Date("2023-04-21T23:59:59").getTime();

  return (
    <>
      <Head>
        <title>Young Alumni Weekend</title>
        <meta
          name="description"
          content="Website for the Young Alumni Weekend"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <div className="body-wrapper">
          <div className="body">
            <img src="../img/group.jpg" alt="home"></img>
          </div>
          <Countdown targetDate={targetDate} />
          <div className="button-wrapper">
            <button className="bodybtn">Events</button>
            <button className="bodybtn">RSVP</button>
            <button className="bodybtn">Donate</button>
          </div>
        </div>
        <section>
          <h2>Events</h2>
          <h2>Contact</h2>
        </section>
      </main>
      <Footer />
    </>
  );
}
