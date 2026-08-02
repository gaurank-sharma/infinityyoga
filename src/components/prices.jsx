import { Check } from "lucide-react";

const plans = [
  {
    title: "Starter Flex",
    subtitle: "3 Days Weekly",
    price: 5000,
    oldPrice: 6000,
    classes: 12,
    people: 2,
    time: "1 Hour class",
    nutrition: false,
  },
  {
    title: "Balance Boost",
    subtitle: "4 Days Weekly",
    price: 6000,
    oldPrice: 8000,
    classes: 16,
    people: 2,
    time: "1 Hour class",
    nutrition: false,
    popular: true,
  },
  {
    title: "Elite Wellness",
    subtitle: "5 Days Weekly",
    price: 7000,
    oldPrice: 10000,
    classes: 20,
    people: 2,
    time: "1 Hour class",
    nutrition: true,
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2">Choose Your Perfect Plan</h2>
        <p className="text-gray-600 mb-10">Classes Offered by us</p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative border rounded-xl shadow-lg p-6 bg-white flex flex-col items-center ${
                plan.popular ? "border-blue-500" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                  POPULAR
                </span>
              )}

              <h3 className="text-xl font-bold text-blue-950 mb-1">
                {plan.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>

              <div className="flex items-end mb-4 space-x-2">
                <p className="text-gray-500 line-through text-sm">
                  Rs{plan.oldPrice}
                </p>
                <p className="text-4xl font-bold">Rs{plan.price}</p>
                <p className="text-sm text-gray-600">/Month</p>
              </div>

              <ul className="text-sm text-left space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="text-green-600 w-4 h-4" /> {plan.classes} Classes
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600 w-4 h-4" /> {plan.people} Person
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600 w-4 h-4" /> {plan.time}
                </li>
                {plan.nutrition && (
                  <li className="flex items-center gap-2">
                    <Check className="text-green-600 w-4 h-4" /> Nutrition Plan
                  </li>
                )}
              </ul>

              <button className="bg-blue-900 text-white py-2 px-6 rounded-full hover:bg-blue-950 transition">
                GET IT
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
