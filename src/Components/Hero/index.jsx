import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <div className="bg-[#FFFFFC] pt-35 pb-0 md:pt-35 pb-0 px-4 md:px-8 lg:px-20 mb-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              staggerChildren: 0.2,
              duration: 1,
              ease: "easeOut",
            }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="flex items-center pb-6">
              <p className="flex bg-[#F3FFCF] justify-center items-center rounded-3xl px-5 py-3 gap-2">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 1 }}
                  className="text-sm sm:text-base font-semibold"
                >
                  Uber Eats:
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 1 }}
                  className="flex gap-1"
                >
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#10003B]"
                    >
                      <path
                        fill="currentColor"
                        d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"
                      />
                    </svg>
                  ))}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="text-sm sm:text-base font-medium"
                >
                  (4.9)
                </motion.span>
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-left">
                Bite into Happiness
              </h2>
              <p className="text-base sm:text-lg font-medium pt-4 text-left">
                Welcome to Burger Haven, where every bite is a step closer to happiness.
              </p>

              <div className="flex flex-wrap justify-start gap-4 mt-8">
                <button className="bg-black text-white font-semibold px-6 py-3 rounded-3xl">
                  Book Table
                </button>
                <button className="border border-black bg-transparent font-semibold text-black px-6 py-3 rounded-3xl">
                  Explore Menu
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <motion.img
              src="https://framerusercontent.com/images/HRt0QtIVroflwGlOD2pKuhUQ5A.png"
              className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-cover rounded-4xl"
              style={{ boxShadow: "-25px -25px 0px 0px #F3FFCF" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1.4, ease: "easeOut" }}
              viewport={{ once: true }}
              alt="Burger Hero"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
