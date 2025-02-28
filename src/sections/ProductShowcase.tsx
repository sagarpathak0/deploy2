import productImage from "@/assets/product-image.jpg";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#71b1ff] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">
              Boost efficiency. Secure. Decentralized. Blockchain-powered
            </div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track fraudulent activities
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your unsafe accounts into a fully functional, fraud-proof,
            account in just minutes with this application.
          </p>
        </div>
        <div className="relative">
        <Image src={productImage} alt="Product Image" className="mt-10 " />
          {/* 
          <Image
            src={pyramidImage}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src={tubeImage}
            alt="Tube Image"
            height={248}
            className="hidden md:block absolute -bottom-24 -left-36"
          /> */}
        </div>
      </div>
    </section>
  );
};
