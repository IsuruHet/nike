import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center items-center min-h-screen gap-10 p-4 md:p-10"
    >
      <div className="relative xl:w-2/5 w-full flex flex-col justify-center items-start pt-20 md:pt-28">
        <p className="text-lg md:text-xl font-roboto text-red-400">
          Our Summer Collection
        </p>
        <h1 className="mt-6 md:mt-10 font-roboto text-5xl sm:text-6xl md:text-8xl font-bold leading-tight">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-6">
            The New Arrival
          </span>
          <br />
          <span className="text-red-400 inline-block mt-2">Nike</span> Shoes
        </h1>
        <p className="font-roboto text-slate-400 text-base md:text-lg leading-7 mt-6 mb-10 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex flex-wrap w-full mt-10 gap-10 md:gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
              <p className="font-roboto text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="xl:w-3/5 w-full flex flex-col justify-center items-center bg-blue-100">
        <img
          src={bigShoeImage}
          alt="Nike shoes"
          className="w-full max-w-[500px] object-contain"
        />
        <div className="flex gap-4 mt-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
                bigShoeImg={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
