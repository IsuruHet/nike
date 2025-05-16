import { star } from "../assets/icons";
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col text-slate-600">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center">{feedback}</p>
      <div className="mt-3 flex justify-center">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-roboto">({rating})</p>
      </div>
      <h3 className="mt-1 text-2xl text-center font-bold">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
