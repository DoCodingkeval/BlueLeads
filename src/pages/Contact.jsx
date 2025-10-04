import { inputFields } from "../components/Data";
import Input from "../components/Input";
import Title from "../shared/Title";

const Contact = () => {
    return (
        <>
            <section
                className="w-full h-full py-10 lg:max-w-xl mx-auto"
                id="contact"
            >
                <Title title="Contact Us" />
                <form className="mt-10">
                    <div className="flex flex-col items-center gap-y-3 text-sm">
                        {inputFields.map((fields) => (
                            <Input key={fields.id} type={fields.type} placeholder={fields.placeholder} />
                        ))}
                        <textarea placeholder="Message" className="border-2 border-blue-500 px-3 focus:outline-0 focus:ring focus:ring-blue-600 text-neutral-600 py-2 w-full rounded-10 resize-none" rows={6}></textarea>
                    </div>
                    <button className="w-full bg-blue-600 text-white text-center rounded-10 p-2 font-semibold tracking-wider uppercase mt-4 cursor-pointer hover:bg-blue-700 transition-all duration-300">Submit</button>
                </form>
            </section>
        </>
    );
};

export default Contact;
