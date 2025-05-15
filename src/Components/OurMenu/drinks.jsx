import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";

function Drinks() {
  const menus = [
    {
      id: 1,
      url: "https://img.freepik.com/free-photo/close-up-frothy-golden-beer-glass-generative-ai_188544-12268.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&semt=ais_hybrid&w=740",
      title: "Soda",
      desc: "Choice of cola, lemonade, or root beer.",
      price: "$1.99",
    },
    {
      id: 2,
      url: "https://img.freepik.com/free-photo/3d-rendering-chinese-reunion-dinner-drink_23-2151089081.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&semt=ais_hybrid&w=740",
      title: "Iced Tea",
      desc: "Freshly brewed iced tea, sweetened or unsweetened.",
      price: "$2.99",
    },
    {
      id: 3,
      url: "https://img.freepik.com/free-photo/kiwi-fruit-cocktail-martini-glass-garnished-with-apple-slices-bamboo-skewer_141793-1913.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&semt=ais_hybrid&w=740",
      title: "Kiwi Cocktail",
      desc: "Special Kiwin Cocktail",
      price: "$3.99",
    },
    {
      id: 4,
      url: "https://img.freepik.com/free-photo/close-up-beer-with-plate-sandwich-fried-potatoes_176474-2426.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&semt=ais_hybrid&w=740",
      title: "Craft Beer",
      desc: "Selection of local craft beers.",
      price: "$4.99",
    },
  ];
  const [hoverImage, setHoverImage] = useState(menus[0].url);

  return (
    <div className="pt-20 md:pt-55 pb-0 pr-0 md:pr-0 lg:pr-20 bg-white">
 

      <div className="flex flex-col-reverse lg:flex-row gap-10 min-h-screen snap-y snap-mandatory px-5">
  
    <motion.div
                       initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1,delay:.2, ease: "easeOut" }}
                   viewport={{once:true}}
                  
                className="lg:right-0 lg:top-1/2 lg:translate-y-[8%] lg:translate-x-[10%] w-full lg:w-[100%] px-5 md:px-10 py-15 rounded-4xl bg-[#F3FFCF] shadow-xl z-10" >
                    <motion.h4
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                       viewport={{once:true}}
                      className="text-2xl font-bold text-left pb-8"
                    >
                      Drinks
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
{/* Sticky Image Section */}
        <div className="lg:w-2/3">
                    <div>
                      <motion.img
                        // key={hoverImage}
                        src="https://img.freepik.com/free-photo/close-up-frothy-golden-beer-glass-generative-ai_188544-12268.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&semt=ais_hybrid&w=740"
                className="w-full h-[500px] object-cover rounded-4xl"
                        alt="Hovered Burger"
                            initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1,delay:.2, ease: "easeOut" }}
                   viewport={{once:true}}
                      />
                    </div>
                  </div>
      </div>
    </div>
  );
}

export default Drinks;
