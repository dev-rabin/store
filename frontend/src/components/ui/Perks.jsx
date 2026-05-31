import React from "react";
import { faTruck, faPhone, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const features = [
  {
    id: 1,
    icon: faTruck,
    title: "FREE & FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    id: 2,
    icon: faPhone,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    icon: faCheck,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

const Perks = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="
              group
              flex
              flex-col
              items-center
              text-center
              p-8
              rounded-3xl
              bg-white
              shadow-[0_10px_40px_rgba(0,0,0,0.06)]
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
              hover:-translate-y-2
              transition-all
              duration-500
            "
          >
            <div
              className="
                w-20
                h-20
                rounded-full
                bg-black
                flex
                items-center
                justify-center
                mb-6
                group-hover:bg-red-500
                transition-all
                duration-500
              "
            >
              <FontAwesomeIcon
                icon={feature.icon}
                className="
                  text-white
                  text-3xl
                  group-hover:scale-110
                  transition
                "
              />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Perks;
