import React from "react";
import { easeIn, motion } from "framer-motion";

function ContactUs() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="px-4 md:px-10 lg:px-20 pt-20"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left pb-10">
          Visit Us & Book a Table
        </h2>

        <motion.div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, translateX: "-100%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: easeIn }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <iframe
              className="rounded-3xl w-full h-72 sm:h-96 md:h-[450px]"
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d12091.811400653069!2d-73.988104!3d40.741063!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ0JzI4LjIiTiA3M8KwNTknMTcuMiJX!5e0!3m2!1sen!2sus!4v1747023547759!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: "10%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: easeIn }}
            viewport={{ once: true }}
            className="w-full lg:w-[100%] px-5 md:px-10 py-10 rounded-4xl bg-[#F3FFCF] shadow-xl z-10 
              lg:right-0 lg:top-1/2 lg:translate-y-[7%] lg:translate-x-[-10%]"
          >
            <h1 className="text-black text-3xl md:text-4xl font-black">Patty</h1>

            <h4 className="text-xl md:text-2xl leading-6 font-bold pt-6">
              Welcome to enjoy happiness
            </h4>

            <p className="text-base font-medium leading-6 pt-4">
              At Burger Haven, our story began with a simple love for great burgers. Founded in 2020
              by friends and food enthusiasts, our mission is to serve delicious, high-quality burgers
              made with fresh, locally sourced ingredients.
            </p>

            <p className="text-base font-medium leading-6 pt-4">
              Join us at Burger Haven and taste the difference passion and quality make.
            </p>

            <h5 className="text-lg md:text-xl font-semibold pt-6 pb-2">
              Find us from the heart of New York:
            </h5>
            <ul className="text-base font-medium space-y-1">
              <li>Burger Haven</li>
              <li>123 Burger Lane</li>
              <li>Food City, FC 12345</li>
            </ul>

            <div className="flex flex-wrap justify-start gap-4 pt-8">
              <button className="bg-black text-white px-6 py-3 rounded-3xl font-semibold">
                Book Table
              </button>
              <button className="border border-black text-black px-6 py-3 rounded-3xl font-semibold">
                Explore Menu
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default ContactUs;
