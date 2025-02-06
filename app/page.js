"use client";
import Image from "next/image";
import { Button, Card, Layout, Menu, Input, Drawer } from "antd";

import {
  SearchOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import MenuComponent from "./component/Menu";
import About from "./component/About";
const { Header, Content } = Layout;
export default function Home() {
  return (
    <div>
      <MenuComponent />
      <div className="h-16 "></div>
      <div className=" bg-white">
        <header className=" bg-green-600 text-white ">
          <div className=" relative top-0 left-0 w-full h-[700px] bg-[url(https://joygarden.vn/wp-content/uploads/sites/16/2023/08/Heroimage.jpeg)] bg-center  ">
            <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="mt-4 text-7xl font-bold uppercase">
                Vườn mộng mer
              </h1>
              <div className="text-2xl mt-2">
                Vẽ lên khu vườn của bạn từ nến thơm
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
      </div>
      <Content className="my-7">
        <About />
      </Content>
      <Content className="px-32">
        {/* Featured Products Section */}
        <h2 className="text-center text-2xl font-bold text-green-800 mb-6">
          SẢN PHẨM NỔI BẬT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Bầu Trúc Sen Đá Nét Chàm",
              price: "379.000 đ",
              image:
                "https://vsenda.net/wp-content/uploads/2024/12/Them-tieu-de-43-300x300.png",
            },
            {
              title: "Bầu Trúc Sen Đá Đất Việt",
              price: "369.000 đ",
              image:
                "https://vsenda.net/wp-content/uploads/2024/12/Them-tieu-de-43-300x300.png",
            },
            {
              title: "Tiểu Cảnh Sen Đá Đồi Xanh",
              price: "269.000 đ",
              image:
                "https://vsenda.net/wp-content/uploads/2024/12/Them-tieu-de-43-300x300.png",
            },
            {
              title: "Tiểu Cảnh Sen Đá Thì Thầm",
              price: "329.000 đ",
              image:
                "https://vsenda.net/wp-content/uploads/2024/12/Them-tieu-de-43-300x300.png",
            },
          ].map((product, index) => (
            <Card
              key={index}
              hoverable
              cover={
                <img
                  alt={product.title}
                  src={product.image}
                  className="rounded-t-xl"
                />
              }
              className="rounded-lg shadow-lg"
              size="small"
            >
              <Card.Meta
                title={
                  <div className="text-lg font-semibold text-center">
                    {product.title}
                  </div>
                }
                description={
                  <div className="text-green-700 font-medium text-center">
                    {product.price}
                  </div>
                }
              />
            </Card>
          ))}
        </div>
      </Content>
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <Card className="text-center bg-white shadow-lg">
            <h3 className="text-xl font-bold">Showroom</h3>
            <div className="mt-2 text-gray-600">
              46/8 Lê Hữu Kiều, P Bình Trưng Tây
            </div>
          </Card>
          <Card className="text-center bg-white shadow-lg">
            <h3 className="text-xl font-bold">Warehouse</h3>
            <div className="mt-2 text-gray-600">
              56-58 Lê Hữu Kiều, P Bình Trưng Tây
            </div>
          </Card>
          <Card className="text-center bg-white shadow-lg">
            <h3 className="text-xl font-bold">Nursery</h3>
            <div className="mt-2 text-gray-600">
              DT848, Tân Khánh Đông, TP Sa Đéc
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
