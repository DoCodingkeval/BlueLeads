import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
    const [isopen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white border-b border-neutral-200 z-50 h-14 lg:h-18">
            <nav className="px-4 h-full flex justify-between items-center lg:max-w-6xl mx-auto overflow-x-hidden">
                <HashLink className="font-montalternate font-bold text-xl text-neutral-800" to="/">
                    <span className="text-blue-600">Blue</span>Leads
                </HashLink>
                <button className={`w-6 h-0.5 lg:hidden -translate-y-0.5 cursor-pointer bg-black relative transition-all duration-200 before:absolute before:content-[''] before:top-2 before:left-0 before:w-full before:h-full before:bg-black before:transition-all ease-in before:duration-200 before:ease-in ${isopen && '-rotate-45 before:rotate-90 before:-translate-y-[7px]'}`} onClick={() => setIsOpen(!isopen)} />
                <div className={`max-lg:absolute top-14 left-0 lg:translate-x-0 bg-white max-lg:w-full max-lg:h-screen max-lg:p-6 transition-all duration-200 ease-in ${isopen ? "translate-x-0" : "translate-x-full"}`}>
                    <ul className="flex flex-col lg:flex-row gap-8 text-sm">
                        {["home", "services", "growth", "testimonials", "contact"].map((item, index) => (
                            <li key={index} className="font-bold tracking-wide hover:-translate-y-0.5 hover:text-blue-600 transition-all duration-300 capitalize text-neutral-700">
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
