"use client";
import React from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = new FormData(e.target);
    const name = from.get("name");
    const email = from.get("email");
    const message = from.get("message");
    const fetch = async () => {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_URL}mail_controll`,
          {
            name: name,
            email: email,
            message: message,
          }
        );
        toast.success(res.data.message);
        console.log(res);
      } catch (error) {
        toast.error(error.res.data.message);
        console.log(error);
      }
    };

    fetch();
  };
  return (
    <section className="w-full bg-black py-20 px-4">
      <ToastContainer />
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Get In Touch
        </h2>
        <div className="p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                name="message"
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <Send size={20} />
              Send Message
            </button>
          </form>
          <div className="mt-8 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="#"
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
              supanusans@example.com
            </a>
            <a
              href="tel:+94759920388"
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <MessageSquare size={20} />
              Schedule a call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
