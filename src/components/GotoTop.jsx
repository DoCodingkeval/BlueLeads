import { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

const GotoTop = () => {
  const gotobtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [isvisible, setVisible] = useState(false);

  const listenToScroll = () => {
    let heightTop = 300;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windowScroll > heightTop) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="container">
      {isvisible && (
        <div className="top-btn rounded" onClick={gotobtn}>
          <RiArrowUpLine size={26} />
        </div>
      )}
    </div>
  );
};

export default GotoTop;
