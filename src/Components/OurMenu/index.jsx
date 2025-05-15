import React, { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import Sides from "./sides";
import Desserts from "./desserts";
import Drinks from "./drinks";

const OurMenu = forwardRef((props, ref) => {
  const menus = [
    {
      id: 1,
      url: "https://framerusercontent.com/images/k073DeYNt8s9bXDGbNg46jmMBIc.png?scale-down-to=512",
      title: "Classic Burger",
      desc: "Juicy beef patty, fresh lettuce, tomatoes, onions, pickles, and our special house sauce.",
      price: "$8.99",
    },
    {
      id: 2,
      url: "https://framerusercontent.com/images/qeP1aHI5Pcu9IHkIcZqyx9q38.jpg?scale-down-to=512",
      title: "Cheese Burger",
      desc: "Juicy beef patty topped with melted cheddar cheese, fresh lettuce, tomatoes, onions, pickles, and ketchup on a toasted bun.",
      price: "$8.99",
    },
    {
      id: 3,
      url: "https://framerusercontent.com/images/9PFEWzfMQAYfcFy9zs0EIsEMzik.jpg?scale-down-to=512",
      title: "Bacon BBQ Burger",
      desc: "Beef patty with crispy bacon, cheddar cheese, onion rings, BBQ sauce, lettuce, and tomatoes on a toasted bun.",
      price: "$8.99",
    },
    {
      id: 4,
      url: "https://framerusercontent.com/images/c99PZqydYt9KObteJyOo1DdAA.jpg?scale-down-to=512",
      title: "Spicy Jalapeño Burger",
      desc: "Spicy beef patty, pepper jack cheese, jalapeños, lettuce, tomatoes, and chipotle mayo on a toasted bun.",
      price: "$10.49",
    },
  ];

  const [hoverImage, setHoverImage] = useState(menus[0].url);

  return (
    <>
      <div ref={ref} id="menu" className=" py-20 pl-0 md:pl-0 lg:pl-20 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-10 text-5xl font-bold text-left pb-14"
        >
          Our Menu
        </motion.h2>

        <div className="pt-0 md:pt-20 flex flex-col lg:flex-row gap-10 min-h-screen snap-y snap-mandatory px-5">
          {/* Left Image Section */}
          <div className="lg:w-2/3">
            <motion.div>
              <motion.img
                key={hoverImage}
                src={hoverImage}
                className="w-full h-[500px] object-cover rounded-4xl"
                alt="Hovered Burger"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </motion.div>
          </div>

          {/* Right Burger List Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:right-0 lg:top-1/2 lg:translate-y-[8%] lg:translate-x-[-10%] w-full lg:w-[100%] px-5 md:px-10 py-15 rounded-4xl bg-[#F3FFCF] shadow-xl z-10"
          >
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-left pb-8"
            >
              Burgers
            </motion.h4>

            {menus.map((data, index) => (
                                        <motion.div
                                          key={data.id}
                                          className="flex gap-3 md:gap-9 items-start py-2 cursor-pointer"
                                          initial={{ opacity: 0, x: 50 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          transition={{ duration: 0.5, delay: index * 0.1 }}
                                          onMouseEnter={() => setHoverImage(data.url)}
                                          onMouseLeave={() => setHoverImage(menus[0].url)}
                                          viewport={{ once: true }}
                                        >
                                          <div className="w-20 h-20 md:w-26 md:h-26">
                                            <img
                                              src={data.url}
                                              className="w-full h-full object-cover rounded-full border border-gray-300"
                                              alt={data.title}
                                            />
                                          </div>
                                          <div className="flex-1">
                                                   <h4 className="text-medium md:text-lg  font-bold text-left">{data.title}</h4>
                                            <h4 className="text-medium md:text-lg font-bold text-left my-1">{data.price}</h4>
                                            <p className="text-sm md:text-medium font-medium leading-5 text-left ">{data.desc}</p>
                                          </div>
                                        </motion.div>
                                      ))}
          </motion.div>
        </div>
      </div>
        
      <Sides />
      <Desserts />
      <Drinks />
    </>
  );
});

export default OurMenu;
