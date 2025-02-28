/* eslint-disable react/jsx-key */
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

interface PricingTier {
  title: string;
  monthlyPrice: number;
  buttonText: string;
  popular: boolean;
  inverse: boolean;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: "Free",
    monthlyPrice: 499,
    buttonText: "Get started for nominal price",
    popular: false,
    inverse: false,
    features: [
      "Basic fraud detection (Limited checks per month)",
      "Limited report generation (e.g., 5 reports/month)",
      "Community support instead of Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 3999,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Fraud detection (Multiple checks per month)",
      "Unlimited fraud reports",
      "Real-time fraud alerts",
      "Custom risk scoring",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 7999,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Bulk fraud analysis",
      "24/7 dedicated fraud analyst support",
      "Integration with banking APIs",
      "Advanced fraud pattern recognition",
      "Custom fraud rules & workflow automation",
    ],
  },
];

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            For unlimited tasks, better security, and exclusive features.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(({
            title,
            monthlyPrice,
            buttonText,
            popular,
            inverse,
            features,
          }, index) => (
            <div
              key={index}
              className={twMerge(
                "card",
                inverse && "border-black bg-black text-white"
              )}
            >
              <div className="flex justify-between">
                <h3
                  className={twMerge(
                    "text-lg font-bold text-black/50",
                    inverse && "text-white/60"
                  )}
                >
                  {title}
                </h3>
                {popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                      Popular
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  ₹{monthlyPrice}
                </span>
                <span className="tracking-tight font-bold text-black/50">/month</span>
              </div>
              <button
                className={twMerge(
                  "btn btn-primary w-full mt-[30px]",
                  inverse && "bg-white text-black"
                )}
              >
                {buttonText}
              </button>
              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm flex items-center gap-4">
                    <CheckIcon className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};