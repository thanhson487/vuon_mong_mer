import { Input, Button, Card } from "antd";
import {
  PhoneOutlined,
  SendOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import React from "react";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }} // Chỉ chạy 1 lần khi vào viewport
    >
      <div
        id="contact"
        className="  flex flex-col justify-center items-center  bg-[url(https://joygarden.vn/wp-content/uploads/sites/16/2023/08/Heroimage.jpeg)] bg-cover bg-center bg-no-repeat bg-fixed"
      >
        <div className=" shadow-sm rounded-2xl p-6 md:flex w-full md:w-3/4">
          {/* Left Section */}
          <Card className=" w-full md:w-1/2 p-4 shadow-md">
            <div className="flex items-center text-green-600 text-lg font-semibold">
              <PhoneOutlined className="mr-2" /> 096 284 1055
            </div>
            <p className="text-gray-600 text-sm">Zalo, Viber: 096 284 1055</p>
            <h2 className="text-xl font-semibold mt-3">Vườn Mộng Mơ</h2>
            <p className="flex items-center text-gray-600 text-sm">
              <EnvironmentOutlined className="mr-2" /> 73 Yên Bình Yên Nghĩa Hà
              Đông
            </p>
            <a
              href="https://maps.app.goo.gl/qU4vnPMajEbYCAT58"
              target="_blank"
              className="text-green-600 underline text-sm"
            >
              Xem địa chỉ
            </a>
            <div className="flex w-full flex-col  text-green-600 text-base font-semibold">
              <div className="flex items-center">
                <img
                  src="https://img.icons8.com/?size=100&id=HoN5DART1Bu1&format=png&color=000000"
                  className="w-[50px]"
                />
                Shopee: vuonmongmo
              </div>
              <div className="flex items-center">
               
                <img
                  src="https://img.icons8.com/?size=100&id=118555&format=png&color=000000"
                  className="w-[50px]"
                />
                Facebook: Vườn Mộng Mơ
              </div>
              <div className="flex items-center"><img src = "https://img.icons8.com/?size=100&id=-x2V8Q63DerT&format=png&color=000000" className="w-[50px]"/>Tiktok: vuonmongmo</div>
            </div>
          </Card>

          {/* Right Section */}
          <Card className="w-full md:w-1/2 p-4 shadow-md mt-3 md:ml-4 md:mt-0">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.219942048599!2d105.71870717583973!3d20.94368079069422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134526f306af0fd%3A0x67020583398087cf!2zNzMgxJDGsOG7nW5nIFnDqm4gQsOsbmgsIFThu5UgZMOibiBwaOG7kSAxNCwgSMOgIMSQw7RuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1739341870059!5m2!1svi!2s" width="100%" height="250px"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           
          </Card>
        </div>
        <div className="text-center text-[#00a76f] mt-2">
          Copyright © 2021 Vườn mộng mơ. All rights reserved
        </div>
      </div>
    </motion.div>
  );
}
