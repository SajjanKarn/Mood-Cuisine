"use client";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", description: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
    // Add form submission logic here
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-100 p-5">
      <h1 className="text-4xl font-bold font-space text-center neubrutalism-border neubrutalism-shadow p-3 mb-8">
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-5 bg-white neubrutalism-border neubrutalism-shadow"
      >
        <div className="mb-6">
          <label
            className="block text-lg font-urbanist font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            placeholder="John Doe"
            onChange={handleChange}
            className="w-full p-3 font-space neubrutalism-border neubrutalism-shadow focus:outline-none focus:neubrutalism-hover"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-lg font-urbanist font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            placeholder="abc@example.com"
            onChange={handleChange}
            className="w-full p-3 font-space neubrutalism-border neubrutalism-shadow focus:outline-none focus:neubrutalism-hover"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-lg font-urbanist font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            placeholder="Type your message here..."
            onChange={handleChange}
            rows={4}
            className="w-full p-3 font-space neubrutalism-border neubrutalism-shadow focus:outline-none focus:neubrutalism-hover"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 text-lg font-space font-bold text-black bg-customPrimary neubrutalism-border neubrutalism-shadow hover:bg-gray-800 hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
