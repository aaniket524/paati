import React from "react";
import Copyright from "./copyright";
import { easeIn, motion } from "framer-motion";

function Footer() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: "15%" }}
        whileInView={{ opacity: 1, translateY: "0%" }}
        transition={{ duration: 0.1, delay: 0.2, ease: [0.34, 1.09, 0.64, 1] }}
        viewport={{ once: true }}
      >
        <div className="mt-20 py-10 rounded-t-4xl bg-[#F3FFCF] px-5 md:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left Section */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-black text-3xl md:text-4xl font-black">
                Patty
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-left py-6 md:py-10">
                Bite into Happiness
              </h2>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 lg:border-l-2 lg:pl-10">
              {/* Opening Hours */}
              <div>
                <h4 className="text-lg font-bold pb-4">Opening hours:</h4>
                <p className="text-base font-medium pb-2">
                  Mon - Thu: 11:00 AM - 9:00 PM
                </p>
                <p className="text-base font-medium pb-2">
                  Fri - Sat: 11:00 AM - 10:00 PM
                </p>
                <p className="text-base font-medium pb-2">Sun: 12:00 PM - 8:00 PM</p>
              </div>

              {/* Phone */}
              <div className="pt-6">
                <h4 className="text-lg font-bold pb-4">Phone:</h4>
                <p className="text-base font-medium pb-2">(555) 987-6543</p>
              </div>

              {/* Location */}
              <div className="pt-6">
                <h4 className="text-lg font-bold pb-4">Location:</h4>
                <p className="text-base font-medium pb-2">Burger Haven</p>
                <p className="text-base font-medium pb-2">123 Burger Lane</p>
                <p className="text-base font-medium pb-2">Food City, FC 12345</p>
              </div>
            </div>
          </div>
        </div>

        <Copyright />
      </motion.div>
    </>
  );
}

export default Footer;
