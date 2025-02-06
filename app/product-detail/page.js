"use client";
import React, { useState } from "react";
import { Card, Collapse } from "antd";
import { InputNumber, Button, Badge } from "antd";
import { LeftOutlined, MinusOutlined, PlusOutlined, RightOutlined } from "@ant-design/icons";
import ReactImageMagnify from "react-image-magnify";
import Image from "next/image";
import MenuComponent from "../component/Menu";
import DescriptionProduct from "../component/DescriptionProduct";
import Footer from "../component/Footer";
import { Slide } from "react-slideshow-image";
const { Meta } = Card;

const Page = () => {
  const thumbnails = [
    "https://picsum.photos/700/700",
    "https://picsum.photos/700/700",
    "https://picsum.photos/700/700",
    "https://picsum.photos/700/700",
    "https://picsum.photos/700/700",
  ];
  const [mainImage, setMainImage] = useState(thumbnails[0]);
  const [inputValue, setInputValue] = useState(1);

  return (
    <div>
      <MenuComponent />

      <div className="flex flex-col lg:flex-row gap-4 p-4  w-[80%] m-auto">
        {/* Left Section: Image Gallery */}
        <div className="flex items-center flex-col lg:w-1/2">
          <div className=" mb-4">
            <img src={mainImage} className=" w-[600px] h-auto " />
          </div>
          <div className=" w-full ">

              <Slide slidesToScroll={4} slidesToShow={4} indicators={true}       prevArrow={
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            <LeftOutlined />
          </button>
        }
        nextArrow={
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            <RightOutlined />
          </button>
        }>
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index + 1}`}
            className="rounded-md cursor-pointer border hover:border-blue-500 mr-2 h-auto mb-2"
            onClick={() => setMainImage(thumbnail)}
          />
        ))}
      </Slide>
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="lg:w-1/2">
          <Card bordered={false}>
            <div className="text-[#00a76f] text-3xl font-bold mb-3">
              SOIL MIX (~6kg) - Đất trồng sen đá 85% đã khoáng
            </div>
            <div className="flex items-end">
              <div className="text-[#00a76f] text-2xl mr-2">200,000,000đ</div>
              <div className="line-through text-[16px] text-[#ff1b1b]">
                400,000,000
              </div>
            </div>
            <p className="mb-4">
              Được mix từ các loại nguyên liệu tốt nhất cho các loại cây mọng
              nước: Đá Perlite, Pumice, Vermi, Peat moss, Phân trùn quế... Giá
              thể Succulent Potting Mix có độ khả năng thoát nước tốt, cung cấp
              các vi chất cần thiết cho xương rồng & sen đá phát triển tốt nhất.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                Thành phần: Perlite, Pumice, Vermiculite, Lava rock, Vỏ thông
                Pinas Bark, Peatmoss & Phân Trùn quế.
              </li>
              <li>
                Thể tích: Bao 12 lít (đúng 12 lít, không phải giống như soil mix
                của đơn vị khác, bao 12 lít nhưng bao bì ghi là 15 lít).
              </li>
              <li>Khối lượng: 5-6 kg tùy độ ẩm của giá thể.</li>
              <li>Có thể sử dụng cho các loại kiểng lá.</li>
              <li>Sản xuất tại: Việt Nam.</li>
            </ul>

            <div className="flex items-center mt-4 space-x-4">
              <div className="flex items-center border rounded-lg px-2 py-1">
                <Button
                  icon={<MinusOutlined />}
                  type="text"
                  onClick={() => {
                    if (inputValue > 1) {
                      setInputValue(inputValue - 1);
                    }
                  }}
                />
                <InputNumber
                  min={1}
                  defaultValue={inputValue}
                  value={inputValue}
                  className="w-12 text-center border-none"
                />
                <Button
                  icon={<PlusOutlined />}
                  type="text"
                  onClick={() => {
                    setInputValue(inputValue + 1);
                  }}
                />
              </div>
              <Button type="primary">Thêm vào giỏ hàng</Button>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Gọi đặt mua:{" "}
              <a href="tel:0962841055" className="text-blue-500">
                0833449449
              </a>{" "}
              để nhanh chóng đặt hàng.
            </p>
            <div className="mt-3">
              <div className="font-bold">Cam kết bán hàng</div>
              <div className="mt-3">
                Chúng tôi cam kết cung cấp sản phẩm nến thơm đạt tiêu chuẩn an
                toàn và chất lượng cao, đảm bảo sức khỏe người tiêu dùng với các
                nguyên tắc sau:
              </div>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>100% nguyên liệu thuần tự nhiên</li>
                <li>An toàn cho sức khỏe và môi trường</li>
                <li>
                  Quy trình sản xuất tiêu chuẩn, thân thiện với môi trường
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
      <DescriptionProduct />
      <Footer />
    
    </div>
  );
};

export default Page;
