import { reviews } from "../constants/index";
import ReviewCard from "../components/ReviewCard";

const CustomerReview = () => {
  return (
    <section>
      <h3 className="font-roboto text-center text-4xl font-bold">
        What Our <span className="text-red-400">Customers</span> Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg text-center text-slate-500">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
