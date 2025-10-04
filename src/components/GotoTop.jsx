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
        <div className="fixed right-4 bottom-5">
            {isvisible && (
                <div className="bg-blue-600 p-1.5 rounded text-neutral-200" onClick={gotobtn}>
                    <RiArrowUpLine size={24} />
                </div>
            )}
        </div>
    );
};

export default GotoTop;
