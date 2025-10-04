import { ServiceCards } from "../components/Data";
import { motion } from "framer-motion";
import Title from "../shared/Title";

const Service = () => {
    return (
        <section className="w-full h-full" id="solutions">
            <Title title="what we will do for your business" />
            <div className="grid lg:grid-cols-2 gap-x-10 mt-8 lg:mt-16 place-items-center gap-y-10 min-[480px]:w-3/4 mx-auto">
                {ServiceCards.map((item) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: item * 0.2,
                            }}
                            key={item.id}
                            className="rounded-10 border border-neutral-200 p-7 sm:w-2/3 lg:w-full"
                        >
                            <img src={item.imgsrc} className="size-3/4 mx-auto" alt="image" />
                            <h5 className="font-semibold">{item.card_title}</h5>
                            <p className="text-sm">{item.card_description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Service;
