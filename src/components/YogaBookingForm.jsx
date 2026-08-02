import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useLocation } from "react-router-dom";

const YogaBookingForm = () => {
  const location = useLocation(); // To get the session data passed in the URL
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    yogaFor: location.state?.sessionTitle || "", // Using sessionTitle from the state
    mode: "Online",
    availableFor: "Individual",
    monthlyPlan: "12 Sessions",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ah41mhb", // Replace with your service ID
        "template_olbt4mn", // Replace with your template ID
        formData,
        "drJNNttci6yuaQ-BD" // Replace with your PUBLIC key
      )
      .then(
        () => {
          alert("Booking submitted successfully!");
          setFormData({
            name: "",
            phone: "",
            email: "",
            yogaFor: location.state?.sessionTitle || "", 
            mode: "Online",
            availableFor: "Individual",
            monthlyPlan: "12 Sessions",
            message: "",
          });
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.log(error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center mt-10 pt-10 pb-10">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-950">Book Now</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all"
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Enter your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all"
            />
          </div>

          <div>
            <input
              type="text"
              name="yogaFor"
              value={formData.yogaFor}
              readOnly
              className="w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Mode of Session</label>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="mode"
                  value="Online"
                  checked={formData.mode === "Online"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-900"
                />
                <span className="text-gray-600">Online</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="mode"
                  value="Offline"
                  checked={formData.mode === "Offline"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-900"
                />
                <span className="text-gray-600">Offline</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Available For</label>
            <select
              name="availableFor"
              value={formData.availableFor}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all"
            >
              <option>Individual</option>
              <option>Couple</option>
              <option>Old Age</option>
              <option>Groups</option>
              <option>Corporate</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Monthly Plan</label>
            <select
              name="monthlyPlan"
              value={formData.monthlyPlan}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all"
            >
              <option>12 Sessions</option>
              <option>16 Sessions</option>
              <option>20 Sessions</option>
              <option>24 Sessions</option>
            </select>
          </div>

          <div>
  <label className="block text-lg font-medium text-gray-700">Additional Message (Optional)</label>
  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Any extra info you'd like us to know?"
    rows={4}
    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all"
  />
</div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 rounded-lg transition-all"
            >
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default YogaBookingForm;
