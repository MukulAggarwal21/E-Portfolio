import { motion } from 'framer-motion';
import React from 'react';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
        </div>
        <div className='className="mt-14 w-full flex flex-col gap-6'>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">C-Language</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">80%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">C++</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">95%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Data Structures & Algorithms</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">95%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">HTML5</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">CSS</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">85%</span>
              </motion.span>
            </span>
          </div>

          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">JavaScript</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">95%</span>
              </motion.span>
            </span>
          </div>

          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">React-js</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">95%</span>
              </motion.span>
            </span>
          </div>

          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Git & GitHub</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">95%</span>
              </motion.span>
            </span>
          </div>

          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">MYSQL</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">80%</span>
              </motion.span>
            </span>
          </div>

          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Python</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">75%</span>
              </motion.span>
            </span>
          </div>

          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Google Firebase</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">75%</span>
              </motion.span>
            </span>
          </div>

          

        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Non-Tech Skill</h2>
        </div>
        <div className="flex flex-col gap-6">


          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Communication</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">95%</span>
              </motion.span>
            </span>
          </div>


          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Time management</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>


          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">cooperation</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[97%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">97%</span>
              </motion.span>
            </span>
          </div>


          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">adaptability</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>


          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Problem solving</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>

          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">leadership</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>

          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Story telling</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">95%</span>
              </motion.span>
            </span>
          </div>

          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Collaboratin</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>

          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">creativity</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>

          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">prioritization</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">95%</span>
              </motion.span>
            </span>
          </div>

          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">enthusiasm</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[99%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">99%</span>
              </motion.span>
            </span>
          </div>

          

          
        </div>
      </div>
    </motion.div>
  );
}

export default Skills