import { lazy, Suspense, useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
const Hero = lazy(() => import("./components/Hero"));
const Nav = lazy(() => import("./components/Nav"));
const Modeservice = lazy(() => import("./components/Modeservice"));
const Service = lazy(() => import("./components/Service"));
const Showcase = lazy(() => import("./components/Showcase"));
const Testimonial = lazy(() => import("./components/Testimonial"));
const Tips = lazy(() => import("./components/Tips"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const GotoTop = lazy(() => import("./GotoTop"));

function App() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const Timer = setTimeout(() => {
      setLoading(true);
    }, 2200);
    return () => clearTimeout(Timer);
  }, []);

  const LoadingUI = (
    <div className="d-flex flex-column align-items-center justify-content-center h-100 text-center">
      <RingLoader color="blue" size={100} />
      <h3 className="pt-4">Just Hang on, it's cooking something...</h3>
    </div>
  );


  return (
    <>
      {isLoading ? (
        <main>
          <Suspense fallback={<div></div>}>
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
          </Suspense>
        </main>
      ) : (
        LoadingUI
      )}
    </>
  );
}

export default App;
