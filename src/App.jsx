import React from "react";
import { Suspense } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Nav from "./pages/Nav";
import Hero from "./pages/Hero";
const Service = React.lazy(() => import("./pages/Service"));
const Showcase = React.lazy(() => import("./pages/Showcase"));
const Modeservice = React.lazy(() => import("./pages/Modeservice"));
const Testimonial = React.lazy(() => import("./pages/Testimonial"));
const Tips = React.lazy(() => import("./pages/Tips"));
import Contact from "./pages/Contact";
import GotoTop from "./components/GotoTop";
import Footer from "./pages/Footer";
import Online from "./components/Online";

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
