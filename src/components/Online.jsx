

const Online = (props) => {
    return (
        <>
            <img src={props.imgsrc} alt="image" className="min-[480px]:w-4/5 mx-auto sm:w-2/3 lg:w-full" />
            <div className="mt-2.5">
                <h5 className="font-semibold tracking-wide text-lg mb-1.5">{props.title}</h5>
                <p className="text-sm text-neutral-600 leading-relaxed text-justify">{props.description}</p>
            </div>
        </>
    );
};

export default Online;
