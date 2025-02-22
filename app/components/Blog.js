"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export const Blog = () => {
  const [blog, setBlog] = useState(null);
  const fetchRef = useRef(false);
  useEffect(() => {
    const fetch = async () => {
      fetchRef.current = true;
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}blog`);
      setBlog(res.data.blog);
    };
    if (fetchRef.current == false) {
      fetch();
    }
  }, []);

  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Latest Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blog?.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="space-y-3">
                <span className="text-blue-500 text-sm">{post.date}</span>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-blue-500 group-hover:gap-4 transition-all">
                  Read More
                  <ArrowRight size={20} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
