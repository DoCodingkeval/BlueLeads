import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Showcase from "./components/Showcase";
import Modeservice from "./components/Modeservice";
import Testimonial from "./components/Testimonial";
import Tips from "./components/Tips";
import Contact from "./components/Contact";
import GotoTop from "./components/GotoTop";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const Timer = setTimeout(() => {
      setLoading(true);
    }, 1500);
    return () => clearTimeout(Timer);
  }, []);

  const LoadingUI = (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-center"
      style={{ height: "100vh" }}
    >
      <RingLoader color="blue" size={100} />
      <h3 className="pt-4 text-white">
        Just Hang on, it's cooking something...
      </h3>
    </div>
  );

  return (
    <>
      {isLoading ? (
        <>
          <Nav />
          <Hero />
          <Service />
          <Showcase />
          <Modeservice />
          <Testimonial />
          <Tips />
          <Contact />
          <GotoTop />
          <Footer />
        </>
      ) : (
        LoadingUI
      )}
    </>
  );
}

export default App;
