import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function BlogsPage() {
  const pageAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const { text } = useParams();

  const blog = [
    {
      id: 1,
      url: "https://framerusercontent.com/images/Wf3YmLP69JpMrPNpD1dnW2vHRvA.png?scale-down-to=512",
      text: "Introducing Our New Summer Menu",
      date: "April 8, 2025",
    },
    {
      id: 2,
      url: "https://framerusercontent.com/images/Rhkw58upm1n7jUfzuc3LJm3sM0c.png",
      text: "Behind the Scenes at Burger Haven",
      date: "April 15, 2025",
    },
    {
      id: 3,
      url: "https://framerusercontent.com/images/l0y0d8fO7Z82Jk5gDWGtxAotc3s.png",
      text: "Our Commitment to Sustainability",
      date: "March 30, 2025",
    },
    {
      id: 4,
      url: "http://framerusercontent.com/images/EkxNoiGNvgpR7dRKjYjPbplyH2U.jpg?scale-down-to=4096",
      text: "Celebrating One Year of Deliciousness",
      date: "March 28, 2025",
    },
    {
      id: 5,
      url: "https://framerusercontent.com/images/8UUbu6jwDzmVPoOhkG5TbhdIV1o.jpg?scale-down-to=2048",
      text: "Healthy eating: Our Nutritional Promise",
      date: "March 20, 2025",
    },
  ];

  const slugify = (str) =>
    str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const matchedBlog = blog.find((data) => slugify(data.text) === text);

  return (
    <>
      <motion.div
        variants={pageAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6 }}
        className="px-10 sm:px-10 md:px-10 lg:px-12 xl:px-16 pt-24"
      >
        {matchedBlog ? (
          <div className="max-w-[1420px] mx-auto">
            {/* Blog Image */}
            <img
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-3xl mb-10"
              src={matchedBlog.url}
              alt={matchedBlog.text}
              style={{ boxShadow: "-25px -25px 0px 0px #F3FFCF" }}
            />

            {/* Blog Content */}
            <div className="text-left space-y-8 md:space-y-10 lg:w-[80%]">
              <p className="text-sm text-gray-600">{matchedBlog.date}</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                {matchedBlog.text}
              </h1>

              <div className="space-y-6 text-base md:text-lg leading-7 text-gray-800">
                <p>
                  Have you ever wondered who makes your favorite burgers at
                  Burger Haven? We're excited to take you behind the scenes to
                  meet the passionate team that brings our delicious creations
                  to life.
                </p>

                <h2 className="text-2xl font-semibold">
                  Meet Our Head Chef: Alex Ramirez
                </h2>
                <p>
                  <b>Bio:</b> With over 15 years of culinary experience, Chef
                  Alex Ramirez is the creative force behind our mouth-watering
                  menu. Alex’s passion for cooking began at a young age...
                </p>
                <p>
                  <b>Quote:</b> “I believe that a great burger starts with
                  high-quality ingredients and a lot of love...”
                </p>

                <h2 className="text-2xl font-semibold">
                  The Grill Masters: The Heart of Our Kitchen
                </h2>
                <p>
                  Have you ever wondered who makes your favorite burgers at
                  Burger Haven? We're excited to take you behind the scenes...
                </p>

                <h2 className="text-2xl font-semibold">
                  The Friendly Faces: Our Front-of-House Team
                </h2>
                <p>
                  Our grill masters are the unsung heroes of Burger Haven. They
                  ensure that every patty is perfectly cooked...
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-red-500 text-lg">Blog not found.</p>
        )}
      </motion.div>
    </>
  );
}

export default BlogsPage;
