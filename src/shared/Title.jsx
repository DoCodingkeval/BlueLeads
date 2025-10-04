const Title = ({ title }) => {
    return (
        <h1 className="relative text-center text-xl leading-relaxed uppercase text-neutral-900 font-montalternate font-bold sm:text-3xl min-[480px]:w-3/4 sm:w-2/3 mx-auto after:absolute after:content-[''] after:-bottom-2 after:left-1/2 after:-translate-1/2 after:bg-blue-400 after:h-1 after:w-1/3 after:-z-10 lg:after:w-1/6">
            {title}
        </h1>
    )
}

export default Title;
