import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import Sides from "./sides";
import { data } from "motion/react-client";

function Desserts() {
    
  const menus = [
    {
      id: 1,
      url: "https://framerusercontent.com/images/nnobUNoQYCpv2JTW83ibg2Iv9w.jpg?scale-down-to=1024",
      title: "Chocolate Brownie",
      desc: "Rich and fudgy chocolate brownie served with vanilla ice cream.",
      price: "$5.99",
    },
    {
      id: 2,
      url: "https://img.freepik.com/free-photo/close-up-appetizing-pie-apples_23-2148243492.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&semt=ais_hybrid&w=740",
      title: "Apple Pie",
      desc: "Classic apple pie served with a scoop of vanilla ice cream.",
      price: "$5.99",
    },
    {
      id: 3,
      url: "https://img.freepik.com/free-photo/zoom-view-little-round-cake-decorated-with-strawberries-white-plate_176474-120149.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&semt=ais_hybrid&w=740",
      title: "CheeseCakes",
      desc: "Creamy cheesecake with a graham cracker crust, topped with strawberry sauce.",
      price: "$5.99",
    },
    {
      id: 4,
      url: "https://img.freepik.com/free-photo/delicious-pancakes-with-powdered-sugar_23-2148858510.jpg?uid=R192482509&ga=GA1.1.1471145488.1739683588&semt=ais_hybrid&w=740",
      title: "Pan Cakes",
      desc: "Creamy cheesecake with a graham cracker crust, topped with strawberry sauce.",
      price: "$4.49",
    },
  ];
  const [hoverImage, setHoverImage] = useState(menus[0].url);


  return (
    <>
    <div className="pt-20 md:pt-55 pl-0 lg:pl-20 bg-white">
 

      <div className="flex flex-col lg:flex-row gap-10 min-h-screen snap-y snap-mandatory px-5">
        {/* Sticky Image Section */}
        <div className="lg:w-2/3">
                   <div>
                     <motion.img
                      
                       src="https://framerusercontent.com/images/QfJ6JVpTPLk0SEPBb3Ph5vuWso.png?scale-down-to=512"
                       className="w-full h-[500px] object-cover rounded-4xl"
                       alt="Hovered Burger"
                           initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                  viewport={{once:true}}
                 transition={{ duration: 1,delay:.2, ease: "easeOut" }}
                     />
                   </div>
                 </div>

        {/* Scrollable Content Section */}
     <motion.div
                   initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1,delay:.2, ease: "easeOut" }}
               viewport={{once:true}}          
                className="lg:right-0 lg:top-1/2 lg:translate-y-[8%] lg:translate-x-[-10%] w-full lg:w-[100%] px-5 md:px-10 py-15 rounded-4xl bg-[#F3FFCF] shadow-xl z-10" >
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                   viewport={{once:true}}
                  className="text-2xl font-bold text-left pb-5"
                >
                  Desserts
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
    </>
  );
}

export default Desserts;
