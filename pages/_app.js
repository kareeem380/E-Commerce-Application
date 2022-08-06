import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Herosection from "../components/Herosection";
import SearchBar from "../components/SearchBar";
import Products_slider from "../components/Products_slider"
import Wrapper from "../components/Wrapper"
import "../styles/style_wrapper.css"
import "../styles/style_Products_slider.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import 'font-awesome/css/font-awesome.min.css';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <SearchBar />
      <Navbar />
      <Component {...pageProps} />

      <Wrapper /> 

      <Products_slider />

      <Herosection />
      <Footer />
    </>
  );
}

export default MyApp;
