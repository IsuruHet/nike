import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap justify-center items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain"
          w-full
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-roboto text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-red-400 ">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg text-slate-500 leading-7 text-lg ">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that set as apart.
        </p>
        <p className="my-6 lg:max-w-lg text-slate-500 leading-7 text-lg">
          Navigate a realam of posibilities designed to fulfill your unique
          desires, surprissing the loftiest expectations. Your journey with us
          is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-500"
            textColor="text-slate-500"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
