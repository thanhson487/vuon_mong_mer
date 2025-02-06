import { Card } from "antd";
import React from "react";
import { motion } from "framer-motion";
const LinkShop = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }} // Chỉ chạy 1 lần khi vào viewport
    >
      <section className="py-2 md:py-16 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <Card className="text-center bg-white shadow-lg">
            <h3 className="text-xl font-bold flex items-center justify-center"> <img
                  src="https://img.icons8.com/?size=100&id=HoN5DART1Bu1&format=png&color=000000"
                  className="w-[80px]"
                />Shopee</h3>
            <div className="mt-2 text-gray-600">Vườn mộng mơ</div>
          </Card>
          <Card className="text-center bg-white shadow-lg">
            <h3 className="text-xl font-bold flex items-center justify-center"> <img
                  src="https://img.icons8.com/?size=100&id=118555&format=png&color=000000"
                  className="w-[80px]"
                />Facebook</h3>
            <div className="mt-2 text-gray-600">
              56-58 Lê Hữu Kiều, P Bình Trưng Tây
            </div>
          </Card>
          <Card className="text-center bg-white shadow-lg">
           <h3 className="text-xl font-bold flex items-center justify-center"> <img
                  src="https://img.icons8.com/?size=100&id=-x2V8Q63DerT&format=png&color=000000"
                  className="w-[80px]"
                />Tiktok</h3>
            <div className="mt-2 text-gray-600">
              DT848, Tân Khánh Đông, TP Sa Đéc
            </div>
          </Card>
        </div>
      </section>
    </motion.div>
  );
};

export default LinkShop;
