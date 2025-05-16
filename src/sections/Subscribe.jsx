import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="flex flex-col justify-center items-center text-center px-4 py-10"
      id="contact-us"
    >
      <h3 className="text-3xl md:text-4xl font-bold font-roboto mb-6">
        Sign Up for <span className="text-red-400">Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-5 p-2.5 sm:border sm:border-slate-400 rounded-full sm:rounded-full rounded-lg">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="w-full sm:flex-1 outline-none px-4 py-2 rounded-full text-base border border-slate-300 sm:border-none"
        />
        <div className="w-full sm:w-auto">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
