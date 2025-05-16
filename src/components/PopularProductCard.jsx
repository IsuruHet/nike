import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="ratings" width={24} height={24} />
        <p className="text-xl leading-normal text-slate-500">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2lx leading-normal font-semibold">{name}</h3>
      <p className="text-2lx text-red-300 leading-normal">{price}</p>
    </div>
  );
};

export default PopularProductCard;
