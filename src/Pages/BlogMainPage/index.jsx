import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

function BlogMainPage() {
  const pageAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const blog = [
    {
      id: 1,
      url: 'https://framerusercontent.com/images/Wf3YmLP69JpMrPNpD1dnW2vHRvA.png?scale-down-to=512',
      text: 'Introducing Our New Summer Menu',
      date: 'April 8, 2025',
    },
    {
      id: 2,
      url: 'https://framerusercontent.com/images/Rhkw58upm1n7jUfzuc3LJm3sM0c.png',
      text: 'Behind the Scenes at Burger Haven',
      date: 'April 15, 2025',
    },
    {
      id: 3,
      url: 'https://framerusercontent.com/images/l0y0d8fO7Z82Jk5gDWGtxAotc3s.png',
      text: 'Our Commitment to Sustainability',
      date: 'March 30, 2025',
    },
    {
      id: 4,
      url: 'http://framerusercontent.com/images/EkxNoiGNvgpR7dRKjYjPbplyH2U.jpg?scale-down-to=4096',
      text: 'Celebrating One Year of Deliciousness',
      date: 'March 28, 2025',
    },
    {
      id: 5,
      url: 'https://framerusercontent.com/images/8UUbu6jwDzmVPoOhkG5TbhdIV1o.jpg?scale-down-to=2048',
      text: 'Healthy eating: Our Nutritional Promise',
      date: 'March 20, 2025',
    },
  ];

  return (
    <>
        <div className="bg-[#F3FFCF] pt-30 pb-20 md:pt-50 md:pb-25 w-full md:w-11/12 lg:w-[94%] rounded-r-[40px] md:rounded-r-[70px] ">
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-left px-5 md:px-10 lg:px-20 font-black">
    Latest Burger News.
  </h2>
  <p className="text-base md:text-lg lg:text-xl font-medium text-left py-4  px-5 md:px-10 lg:px-20">
    Discover the secrets behind our mouth-watering burgers, and get the scoop on exclusive discounts.
  </p>
</div>
      <motion.div
        variants={pageAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6 }}
        className="px-0 sm:px-8 md:px-10 lg:px-10 xl:px-10 py-10 max-w-[1420px] mx-auto"
      >
        {/* Header Section */}
       

        {/* Blog Grid */}
        <div className="flex flex-wrap -mx-2 px-0">
          {blog.map((data, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-10">
              <motion.div
                initial={{ opacity: 0, y: '5%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-4 text-left border-none z-0"
              >
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: 'easeIn' }}
                  className="rounded-3xl object-cover w-full h-[300px] sm:h-[350px] lg:h-[370px]"
                  style={{ boxShadow: "-15px -15px 0px 0px #F3FFCF" }}
                  src={data.url}
                  alt={data.text}
                />

                <div className="pt-4">
                  <p className="text-sm text-gray-600">{data.date}</p>
                  <Link to={`/blog/${slugify(data.text)}`}>
                    <h4 className="text-xl font-bold pt-1 hover:underline">
                      {data.text}
                    </h4>
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default BlogMainPage;
