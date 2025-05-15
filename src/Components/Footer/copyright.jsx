import React from "react";
import { easeIn, motion } from "framer-motion";

function Copyright() {
  return (
    <>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, translateY: "15%" }}
        whileInView={{ opacity: 1, translateY: "0%" }}
        transition={{ duration: 0.1, delay: 0.2, ease: [0.34, 1.09, 0.64, 1] }}
        className="px-5 md:px-10 lg:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#F3FFCF]"
      >
        <div className="text-center md:text-left">
          <p className="text-sm font-medium leading-5">
            © 2024 – Marvik @Patty
          </p>
        </div>

        <div>
          <ul className="list-none flex flex-wrap justify-center md:justify-end gap-5 md:gap-7 text-center">
            <li className="text-sm font-medium leading-5 hover:underline cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-sm font-medium leading-5 hover:underline cursor-pointer">
              Cookies
            </li>
            <li className="text-sm font-medium leading-5 hover:underline cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
}

export default Copyright;
