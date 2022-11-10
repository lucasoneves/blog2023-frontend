import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper/Wrapper";
import global from "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
}

export default MyApp;
