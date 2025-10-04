import User from "./User";
import { TestimonialData } from "../components/Data";
import Title from "../shared/Title";
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri";
import { useState } from "react";

const Testimonial = () => {
    const [index, setIndex] = useState(0);
    const next = () => {
        setIndex((prev) => (prev + 1) % TestimonialData.length);
    }
    const prev = () => {
        setIndex((prev) => (prev - 1 + TestimonialData.length) % TestimonialData.length);
    }
    return (
        <section className="w-full h-full py-16" id="testimonials">
            <Title title="What client say about us" />
            <div className="mt-14 flex gap-x-6 overflow-hidden">
                <div className="relative border border-neutral-300 rounded-10 mx-auto min-[500px]:w-2/3 md:w-1/2">
                    <User
                        imgsrc={TestimonialData[index].imgsrc}
                        name={TestimonialData[index].user_name}
                        review={TestimonialData[index].user_review}
                        rating={TestimonialData[index].rating}
                    />
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                        <RiArrowLeftCircleLine onClick={prev} className="size-7 text-neutral-500 hover:text-neutral-700 transition duration-200 cursor-pointer" />
                        <RiArrowRightCircleLine onClick={next} className="size-7 text-neutral-500 hover:text-neutral-700 transition duration-200 cursor-pointer" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
