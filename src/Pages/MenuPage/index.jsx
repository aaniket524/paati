import React from "react";
import OurMenu from "../../Components/OurMenu";
import { motion } from 'framer-motion';


function MenuPage(){
    const pageAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};
    return(
        <>
        <motion.div 
         variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
        className="pb-20 md:pb-40">
           <div className="bg-[#F3FFCF] pt-30 pb-20 md:pt-50 md:pb-25 w-full md:w-11/12 lg:w-[94%] rounded-r-[40px] md:rounded-r-[70px] ">
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-left px-5 md:px-10 lg:px-20 font-black">
    Our Updated Menu is HERE!!
  </h2>
  <p className="text-base md:text-lg lg:text-xl font-medium text-left py-4  px-5 md:px-10 lg:px-20">
    Discover the secrets behind our mouth-watering burgers, and get the scoop on exclusive discounts.
  </p>
</div>

             <OurMenu/>
        </motion.div>
        </>
    )
}

export default MenuPage