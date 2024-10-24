import React from "react";
import Link from "next/link";
import { getBlogs, getSingleBlogs } from "../../../services";
import Navbar from "../../components/Navbar";
import MobileNav from "../../components/MobileNav";
import Footer from "../../components/Footer";
import Image from "next/image";
import Content from "../../components/content/Content";
import { IoIosSearch } from "react-icons/io";
import { format } from "date-fns";

const BlogDetail = async ({ params }) => {
  const { data } = await getSingleBlogs(params?.id);
  const blogs = await getBlogs();
  return (
    <div>
      <Navbar />
      <MobileNav />
      <div className="container mx-auto px-4 max-w-7xl mt-14 mb-20 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          <div className="lg:col-span-2">
            <div className="relative">
              <Image
                src={data?.image}
                width={400}
                height={500}
                alt="Blog Image"
                className="rounded-lg w-full h-80 object-cover mb-6"
              />
              <span className="inline-block absolute top-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                {data?.tag}
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              By Saiyed Imtiaj | May 16, 2024
            </p>
            <div className="mt-4">
              <Content overview={data?.overview} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="mb-4 bg-[#140C1C] px-4 py-4 rounded-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-300"
                />
                <button className="px-2 py-2 rounded-md absolute top-0.5 right-0.5 bg-purple-500">
                  <IoIosSearch size={20} />
                </button>
              </div>
            </div>
            {/* Recent Posts */}
            <div className="mb-8 bg-[#140C1C] px-4 py-6 rounded-md">
              <h3 className="font-bold text-lg mb-4">Recent Posts</h3>
              {blogs?.data?.map((blog) => (
                <ul className="flex gap-1" key={blog?._id}>
                  <Image
                    src={blog?.image}
                    width={550}
                    height={550}
                    alt="banner"
                    className="h-10 w-10 object-cover rounded"
                  />
                  <li className="hover:text-purple-500">
                    <Link href="/blog/1">{blog?.title}</Link>
                    <span className="block text-sm text-gray-400">
                      {format(new Date(blog?.createdAt), "MMMM dd, yyyy")}
                    </span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
