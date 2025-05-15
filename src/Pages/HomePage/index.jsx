import React from "react";
import OurMenu from "../../Components/OurMenu";
import Hero from "../../Components/Hero";
import Blogs from "../../Components/Blogs";
import ContactUs from "../../Components/ContactUs";
import { motion } from 'framer-motion';

export default function HomePage(params) {
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
         <Hero />
            <OurMenu/>
            <Blogs />
            <ContactUs />
        </motion.div>
    )
}