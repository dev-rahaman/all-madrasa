import React from "react";

const SubscribeForm = () => {
  return (
    <div className="bg-gray-100 p-8 shadow-xl rounded mx-10">
      <h2 className="text-2xl font-semibold mb-4">
        Subscribe to Our Newsletter
      </h2>
      <form className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="fullName" className="text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="johndoe@example.com"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
