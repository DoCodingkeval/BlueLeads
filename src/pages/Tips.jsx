import FourCards from "../components/FourCards";
import { TipsCards } from "../components/Data";
import Title from "../shared/Title";

const Tips = () => {
    return (
        <section
            className="w-full min-h-screen py-10"
            id="insights"
        >
            <Title title="Tips and Tricks From Our Experts" />
            <div className="mt-16 grid lg:grid-cols-2 lg:gap-20 pb-30">
                {TipsCards.map((item, index) => {
                    return (
                        <>
                            <FourCards
                                key={index}
                                imgsrc={item.imgsrc}
                                title={item.card_title}
                                description={item.card_description}
                            />
                        </>
                    );
                })}
            </div>
        </section>
    );
};

export default Tips;
