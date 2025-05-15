import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";

function Sides() {    
  const menus = [
    {
      id: 1,
      url: "https://framerusercontent.com/images/N2r38pCDccd61NBTxz3sjRh9s.jpg?scale-down-to=512",
      title: "French Fries",
      desc: "Juicy beef patty, fresh lettuce, tomatoes, onions, pickles, and our special house sauce.",
      price: "$2.99",
    },
    {
      id: 2,
      url: "https://framerusercontent.com/images/VuchlMwxgqHoRh7goXKjpuP3c.jpg?scale-down-to=512",
      title: "Sweet Potato Fries",
      desc: "Crispy golden fries.",
      price: "$3.99",
    },
    {
      id: 3,
      url: "https://framerusercontent.com/images/6Z7Mdih5vn0Q5ukMP4KKzT4HVc.jpg?scale-down-to=1024",
      title: "Onion Rings",
      desc: "Beef patty with crispy bacon, cheddar cheese, onion rings, BBQ sauce, lettuce, and tomatoes on a toasted bun.",
      price: "$3.99",
    },
    {
      id: 4,
      url: "https://framerusercontent.com/images/EFif7QR4tfpD4WNdRR52UCU0zs.jpg?scale-down-to=512",
      title: "Mozzarella Sticks",
      desc: "Golden fried mozzarella sticks served with marinara sauce.",
      price: "$4.99",
    },
  ];
  const [hoverImage, setHoverImage] = useState(menus[0].url);


  return (
    <div className="pt-0 md:pt-35 pr-0 md:pr-0 lg:pr-20 bg-white">
 

      <div className="flex flex-col-reverse lg:flex-row gap-10 min-h-screen snap-y snap-mandatory px-5">
  
   <motion.div
                    initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1,delay:.2, ease: "easeOut" }}
                viewport={{once:true}}
               
                className="lg:right-0 lg:top-1/2 lg:translate-y-[8%] lg:translate-x-[10%] w-full lg:w-[100%] px-5 md:px-10 py-15 rounded-4xl bg-[#F3FFCF] shadow-xl z-10">
                 <motion.h4
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{once:true}}
                   className="text-2xl font-bold text-left pb-8"
                 >
                   Sides
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
                      key={hoverImage}
                      src={hoverImage}
                      className="w-full h-[500px] object-cover rounded-4xl"
                      
                      alt="Hovered Burger"
                          initial={{ opacity: 0, y: 20 }}
                           viewport={{once:true}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1,delay:.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
      </div>
    </div>
  );
}

export default Sides;
