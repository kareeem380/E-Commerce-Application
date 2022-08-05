import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Herosection from "../components/Herosection";
import SearchBar from "../components/SearchBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <SearchBar />
      <Navbar />
      <Component {...pageProps} />
      <Herosection />
			<Footer />
    </>
  );
}

export default MyApp;
