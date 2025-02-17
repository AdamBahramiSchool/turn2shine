import Image from "next/image";
import HomeSection from "./home/page"
import WhyUs from "./whyus/page"
import Services from "./services/page"
import Locations from "./locations/page"
import ContactUs from "./contactus/page"
import Gallery from "./gallery/page";
export default function Home() {
  return (
    <div className="">
      <HomeSection/>
      <section id="services"><Services/></section>
      <section id="whyus"><WhyUs/></section>
      <section id="locations"><Locations/></section>
      <section id="contactus"><ContactUs/></section>
      <section id="gallery"><Gallery/></section>
    </div>
  );
}

