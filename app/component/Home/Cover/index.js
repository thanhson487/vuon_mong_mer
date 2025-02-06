import React from "react";
import { motion } from "framer-motion";
const Cover = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }} // Chỉ chạy 1 lần khi vào viewport
    >
    <div className=" bg-white">
      <header className=" bg-green-600 text-white ">
        <div className=" relative top-0 left-0 w-full h-[400px] md:h-[700px] bg-[url(/image/cover.png)] bg-center bg-no-repeat bg-cover">
          <div className="absolute z-20 w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="mt-4 text-3xl  md:text-7xl font-bold uppercase">Vườn mộng mer</h1>
            <div className=" text-sm md:text-2xl mt-2">
             🌿🌿 Nến thơm dẫn lối, hương thơm ngọt lành,chào mừng bạn đến với khu vườn của những giấc mơ đẹp !" 🌿🌿
            </div>
          </div>

          <div className="absolute top-[-80px] left-[60px]  p-4">
            <img
              src="https://joygarden.vn/wp-content/uploads/sites/16/2023/08/logo.jpg"
              alt="Joy Logo"
              className="w-32 h-32 rounded-full"
            />
          </div>
        </div>
      </header>

      {/* Locations Section */}
    </div></motion.div>
  );
};

export default Cover;
