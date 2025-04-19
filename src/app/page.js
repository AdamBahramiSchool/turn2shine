import Image from "next/image";
import HomeSection from "./home/page"

import Services from "./services/page"
import Locations from "./locations/page"
import ContactUs from "./components/ContactUs";
import Gallery from "./gallery/page";
import Footer from "./footer/page"
import TheProcess from "./TheProcess/page"
import GetQuote from "./components/GetQuote";
export default function Home() {
  return (
    <div className="">
      <HomeSection/>
      <section id="services"><Services/></section>
      <section id="The Process"><TheProcess/></section>
      <section id="gallery"><Gallery/></section>
      <section id="contactus"><ContactUs/></section>
      <section id="getquote"><GetQuote/></section>
      {/* <section id="whyus"><WhyUs/></section>
      <section id="locations"><Locations/></section>
      <section id="contactus"><ContactUs/></section>
     
      <section id="footer"><Footer/></section> */}
    </div>
  );
}

