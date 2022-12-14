import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper/Wrapper";
import global from "../styles/global.css";
import Head from "next/head";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          lucasneves - desenvolvimento web, front-end, tecnologia e derivados.
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Wrapper>
        <main className="main-content">
          <Component {...pageProps} />
        </main>
      </Wrapper>
      <Footer />
    </>
  );
}

export default MyApp;
