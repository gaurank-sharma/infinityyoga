import { Link } from 'react-router-dom';

const services = [
  {
    title: "Yoga Classes at Your Doors",
    description: "Get your personal trainer at your home on your schedule time to achieve your health goal.",
    image: "/home_yoga.webp",
    route: "/yoga-at-home"
  },
  {
    title: "Online Live Yoga Classes",
    description: "Online personal and Online group class both are available as per student convenience.",
    image: "/online_yoga.png",
    route: "/online-yoga"
  },
  {
    title: "Prenatal Yoga",
    description: "Focuses on breathing, mindfulness, and stretching during the early stages of pregnancy.",
    image: "/pregency_yoga.png",
    route: "/pregnancy-yoga"
  },
  {
    title: "Meditation & Mindfulness Yoga",
    description: "Focused on mental clarity, inner peace, and breathwork — very attractive to working professionals.",
    image: "/meditation.png",
    route: "/meditation"
  }
];

export default function Services() {
  return (
    <div> 
      <h1 className="text-2xl md:text-6xl font-extrabold text-center text-blue-950 mt-5 mb-5">
        Our Services
      </h1>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between h-full"
          >
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="w-24 h-24 md:w-36 md:h-36 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-center">{service.title}</h3>
              <p className="text-center text-gray-600 mt-2">{service.description}</p>
            </div>
            <div className="flex justify-center mt-6">
              <Link to={service.route}>
                <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-950 transition">
                  BOOK NOW
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
