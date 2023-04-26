import Head from "next/head";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Countdown from "@/components/Countdown";
import Contact from "./Contact";
import About from "./About";
import Event from "./Event";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Gallery from "./Gallery";

export default function Home() {
  const targetDate = new Date("2023-04-21T23:59:59").getTime();

  return (
    <>
      <Head>
        <title>Youg Alumni Weekend</title>
        <meta
          name="description"
          content="Website for the Young Alumni Weekend"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Nav />
        <div className="body-wrapper">
          <div className="body">
            <div className="yaw">
              <h6 className="header">International House</h6>
              <h1>Young Alumni</h1>
              <h1>Weekend</h1>
              <br />
              <FontAwesomeIcon
                icon={faGlobe}
                size="2xl"
                className="globe-icon"
              />
            </div>
            <div className="countdown-wrapper">
              <p>See you in</p>
              <Countdown targetDate={targetDate} />
            </div>
          </div>
        </div>
        <section id="event">
          <Event />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <Footer />
      </main>
    </>
  );
}

Home.getInitialProps = async ({ req, res }) => {
  // Check if the user has entered the correct password
  if (req && req.cookies && req.cookies.password !== "myPassword") {
    res.writeHead(302, { Location: "/Password" });
    res.end();
  }

  return {};
};
