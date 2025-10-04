const FourCards = (props) => {
    return (
        <div className="w-full h-full">
            <picture>
                <img
                    src={props.imgsrc}
                    className="min-[500px]:w-3/4 md:w-2/3 lg:w-5/6 mx-auto w-full h-full"
                    alt="phone img"
                />
            </picture>
            <div className="flex flex-col gap-y-1.5">
                <h5 className="font-simple tracking-wide text-lg">{props.title}</h5>
                <div className="text-neutral-600 text-sm leading-relaxed">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export default FourCards;
