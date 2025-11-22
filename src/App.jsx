import Navbar from "./components/navbar.jsx";
import Hero from "./components/Herosection.jsx";
import Video from "@/components/video";
import AboutUs from "./components/AboutUs.jsx";
import Footer from "./components/Footer.jsx";
import Work from "./components/Work.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Faq from "./components/Faq.jsx";
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="home"><Hero /></section>
      <Video />
      <section id="work"><Work /></section>
      <section id="services"><Services /></section>
      <section id="process"><Process /></section>
      <Testimonials />
      <section id="contact"><Contact /></section>
      <section id="faq"><Faq /></section>
      <Footer />
    </div>
  );
}

export default App;
