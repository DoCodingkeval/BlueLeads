import marketing from "../assets/showcase/marketing.svg";
import { motion } from "framer-motion";

const Showcase = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full py-14 grid lg:grid-cols-2 place-items-center" id="process"
        >
            <img
                src={marketing}
                loading="eager"
                decoding="async"
                className="sm:w-2/3 mx-auto lg:w-full"
                alt="phone img"
            />
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="">
                <h1 className="text-2xl font-semibold md:text-3xl lg:leading-10">
                    Steps to Build A Successful Digital Product
                </h1>
                <p className="text-sm leading-relaxed mt-1.5 lg:mt-2">
                    Creating a digital product that stands out requires more than just
                    an idea — it takes strategy, design thinking, and a user-first
                    mindset. From understanding your audience to building a scalable
                    solution, we guide you through every step of the journey. Whether
                    you're launching a mobile app, SaaS platform, or web tool, our
                    proven process ensures your product is built to succeed in today’s
                    digital landscape.
                </p>
                <a href="#" className="w-max mt-4 text-sm flex items-center gap-x-2 tracking-wider font-semibold bg-blue-500 text-white py-2 px-6 rounded-10 lg:px-7 lg:py-2.5">
                    Contact Us
                </a>
            </motion.div>
        </motion.section>
    );
};

export default Showcase;
