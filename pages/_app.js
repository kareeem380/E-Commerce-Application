import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Herosection from "../components/Herosection";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Herosection />
			<Footer />
    </>
  );
}

export default MyApp;
