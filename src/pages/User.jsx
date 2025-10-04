import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

const User = (props) => {
    const ratingLogic = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (rating >= 1) {
                stars.push(<RiStarFill key={i} className="text-blue-500" />);
            } else if (rating > 0) {
                stars.push(<RiStarHalfFill key={i} className="text-blue-500" />);
            } else {
                stars.push(<RiStarLine key={i} className="text-blue-500" />);
            }
            rating -= 1;
        }
        return stars;
    };

    return (
        <div className="py-6 p-3 w-full">
            <picture>
                <img src={props.imgsrc} className="w-1/2 rounded-full mx-auto" alt="user" />
            </picture>
            <div className="flex flex-col items-center pt-6 gap-y-3">
                <h5 className="font-semibold text-lg">{props.name}</h5>
                <p className="text-sm text-neutral-600 text-center leading-relaxed">{props.review}</p>
                <div className="flex items-center justify-center gap-x-1">{ratingLogic(props.rating)}</div>
            </div>
        </div>
    );
};

export default User;
