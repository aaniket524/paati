import React from "react";
import ReservationTable from "../../Components/ReservationTable";
import { motion } from 'framer-motion';

function Reservation (){
    const pageAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};
    return(
        <motion.div
         variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
        >
        <ReservationTable/>
        {/* <div className='bg-[#F3FFCF] pt-50 pb-10 w-full md:w-1/2 lg:w-[94%] rounded-r-[70px]'>
                <h2 className="text-6xl font-bold text-left px-20 font-black">
                    Our Updated Menu is HERE!!
                </h2>
                <p className='text-xl font-medium font-black text-left py-4 px-20'>Discover the secrets behind our mouth-watering burgers, and get the scoop on exclusive discounts.
</p>
             </div> */}
        </motion.div>
    )
}

export default Reservation