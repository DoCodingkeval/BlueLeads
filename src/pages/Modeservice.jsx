import { DataCards } from "../components/Data";
import Online from "../components/Online";
import Title from "../shared/Title";

const Modeservice = () => {
    return (
        <section className="w-full h-full" id="growth">
            <Title title="Generating New Customers Via Online Mode" />
            <div className="mt-20 min-[480px]:w-5/6 mx-auto grid lg:grid-cols-2 place-items-center">
                {DataCards.map((item) => {
                    return (
                        <Online
                            imgsrc={item.imgsrc}
                            title={item.card_title}
                            description={item.card_description}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Modeservice;
