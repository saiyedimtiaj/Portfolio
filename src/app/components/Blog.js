import Image from "next/image";
import { getBlogs } from "../../../src/services";
import Link from "next/link";
import React from "react";

const Blog = async () => {
  const data = await getBlogs();

  return (
    <div
      id="blog"
      className="container mx-auto px-4 scroll-mt-[15px] md:scroll-mt-[75px] max-w-5xl mt-14"
    >
      <h1 className="text-3xl text-white md:text-5xl text-center font-bold">
        Recent Blog
      </h1>
      <p className="mt-3 text-sm text-white md:text-base text-center mb-10 max-w-3xl mx-auto">
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and you customers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 mb-16">
        {data?.data?.map((blog) => (
          <Link href={`/blog/${blog?._id}`} key={blog?._id}>
            <div className="max-w-sm relative rounded overflow-hidden shadow-lg bg-[#1E1E2F]">
              <div className="overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
                  src={blog?.image}
                  alt={blog?.title}
                />
              </div>
              <span className="inline-block absolute top-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                {blog?.tag}
              </span>
              <div className="px-6 py-5">
                <h2 className="text-xl font-bold text-white mb-2">
                  {blog?.title}
                </h2>
                <div className="flex items-center text-gray-400 text-sm">
                  <p>{new Date(blog?.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
