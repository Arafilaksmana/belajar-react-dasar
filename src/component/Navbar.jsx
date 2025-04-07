import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="fixed w-full h-fit py-3 px-5 lg:px-10  z-10 font-regular border-none backdrop-blur-[3px]">
      {/* DESKTOP NAVBAR */}
      <div className="hidden lg:flex mt-3">
        <div className="text-2xl my-auto">A'rafi Laksmana</div>
        <nav className="bg-white mx-auto min-w-fit px-8 py-3 rounded-2xl">
          <div className="flex justify-evenly divide-x divide-gray-300 box-border">
            <a href="" className="hover:text-blue-800 transition duration-300 ease-in-out pr-4">Archive</a>
            <a href="" className="hover:text-blue-800 transition duration-300 ease-in-out px-4">About</a>
            <a href="" className="hover:text-blue-800 transition duration-300 ease-in-out pl-4">Contact</a>
          </div>
        </nav>
        <div className="flex gap-4 my-auto">
            <div className="flex space-x-1">
             <a href="" className="font-light">LinkedIn</a>
             <img src="/icons/right-up.png" alt="" className="w-4 h-4" />
            </div>
            <div className="flex space-x-1">
             <a href="" className="font-light">Instagram</a>
             <img src="/icons/right-up.png" alt="" className="w-4 h-4" />
            </div>
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="lg:hidden">
        <div className="flex bg-white rounded-2xl px-4 py-4 justify-between items-center relative top-3 z-10">
          <div>A'rafi Laksmana</div>
          <button
            onClick={() => setDropdownVisible(!isDropdownVisible)}
            className="border-l border-l-gray-300 pl-3 transition-all"
          >
            {isDropdownVisible ? "Close" : "Menu"}
          </button>
        </div>

        {/* DROPDOWN */}
        <AnimatePresence>
          {isDropdownVisible && (
            <motion.div
              key="dropdown"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              className="-mt-3 bg-white p-4 rounded-b-2xl overflow-y-auto"
            >
              <div className="flex flex-col gap-5 w-full border-b border-b-gray-300 pb-4 mt-[40%]">
                <a href="" className="text-4xl">Archive</a>
                <a href="" className="text-4xl">About</a>
                <a href="" className="text-4xl">Contact</a>
              </div>
              <div className="flex flex-col gap-3 py-5 border-b border-b-gray-300">
                <div className="flex space-x-1">
                    <a href="">LinkedIn</a>
                    <img src="/icons/right-up.png" alt="" className="w-3 h-3" />
                </div>
                <div className="flex space-x-1">
                    <a href="">Instagram</a>
                    <img src="/icons/right-up.png" alt="" className="w-3 h-3" />
                </div>
                <div className="flex space-x-1">
                    <a href="">Github</a>
                    <img src="/icons/right-up.png" alt="" className="w-3 h-3" />
                </div>
                
              </div>
              <a href="https://grouptikom.com/" className="bg-black flex text-white py-4 px-3 rounded-lg mt-5 relative">
                Get IT Certification
                <span className="bg-white absolute right-2.5 top-3 rounded-md py-2 px-2">
                    <img src="/icons/right-up.png" alt="arrow" className="w-4" />
                </span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Navbar;
