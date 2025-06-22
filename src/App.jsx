import React from "react";
import { Suspense } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
const Service = React.lazy(() => import("./components/Service"));
const Showcase = React.lazy(() => import("./components/Showcase"));
const Modeservice = React.lazy(() => import("./components/Modeservice"));
const Testimonial = React.lazy(() => import("./components/Testimonial"));
const Tips = React.lazy(() => import("./components/Tips"));
import Contact from "./components/Contact";
import GotoTop from "./components/GotoTop";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<p>Loading...</p>}>
        <Service />
        <Showcase />
        <Modeservice />
        <Testimonial />
        <Tips />
      </Suspense>
      <Contact />
      <GotoTop />
      <Footer />
    </>
  );
}

export default App;
