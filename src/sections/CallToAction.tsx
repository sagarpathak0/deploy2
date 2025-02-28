import ArrowRight from "@/assets/arrow-right.svg";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
      <div className="container">
        <div>
          <h2 className="section-title">Sign up for free today.</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your transactions.
          </p>
          <div className="flex gap-2 mt-10 justify-center">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn -btn-text gap-1">
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
