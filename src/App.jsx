import React from "react";
import { Suspense } from "react";
import Nav from "./pages/Nav";
import Hero from "./pages/Hero";
const Service = React.lazy(() => import("./pages/Service"));
const Showcase = React.lazy(() => import("./pages/Showcase"));
const Modeservice = React.lazy(() => import("./pages/Modeservice"));
import Testimonial from "./pages/Testimonial";
const Tips = React.lazy(() => import("./pages/Tips"));
import Contact from "./pages/Contact";
import GotoTop from "./components/GotoTop";
import Footer from "./pages/Footer";

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
