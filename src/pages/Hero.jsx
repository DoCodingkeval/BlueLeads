import hero from "../assets/hero/hero.svg";
import { motion } from "motion/react";
import { RiArrowRightLine } from "react-icons/ri";

const Hero = () => {
    const divVariant = {
        hidden: { opacity: 0, y: -100 },
        show: { opacity: 1, y: 0 },
    };

    return (
            <section
                className="w-full min-h-screen pt-20 pb-10 grid lg:grid-cols-2 lg:place-items-center"
                id="home"
            >
                <motion.div
                    variants={divVariant}
                    initial="hidden"
                    animate="show"
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className=""
                >
                    <div className="text-4xl font-montalternate font-semibold text-neutral-800 md:text-5xl lg:text-6xl lg:leading-17">
                        <span className="text-blue-600 font-extrabold">W</span>
                        <span>
                            e Collect High
                            Quality Leads
                        </span>
                    </div>
                    <p className="text-neutral-500 mt-2 xl:mt-3.5 text-sm leading-relaxed sm:w-3/4 md:text-lg">
                        Reach the right customers through targeted strategies that drive
                        engagement and sales.
                    </p>
                    <a
                        href="#"
                        className="w-max mt-4 text-sm flex items-center gap-x-2 font-semibold bg-blue-500 text-white py-2 px-4 rounded-10 tracking-wider group lg:px-5 lg:py-2.5 xl:px-6"
                    >
                        Get Started
                        <RiArrowRightLine size={22} className="group-hover:translate-x-0.5 transition-all duration-200 ease-in" />
                    </a>
                </motion.div>
                <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    src={hero}
                    loading="lazy"
                    className="max-[425px]:w-full w-5/6 sm:w-2/3 mx-auto lg:w-5/6"
                    alt="heroimg"
                />
        </section>
    );
};

export default Hero;
