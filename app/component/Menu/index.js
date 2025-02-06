"use client";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Menu } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import ShoppingCart from "../ShoppingCart";
const { Header } = Layout;

const MenuComponent = () => {
  const router = useRouter();
  const [drawerVisible, setDrawerVisible] = useState(false);
  return (
    <Header className="bg-white flex justify-between items-center px-4 shadow-md fixed w-full top-0 z-[1000]">
      <div className="flex items-center w-full justify-between">
        <div
          className="text-2xl font-bold text-yellow-600 whitespace-nowrap cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          Vườn mộng mơ
        </div>
        <Menu
          mode="horizontal"
          className="hidden md:flex ml-6 flex-grow text-lg "
          style={{
            flexWrap: "nowrap",
            justifyContent: "flex-start",
          }}
          items={[
            { key: "about", label: "Về chúng tôi" },
            { key: "products", label: "Sản Phẩm" },
            { key: "image", label: "Hình Ảnh" },
            { key: "contact", label: "Liên Hệ" },
          ]}
          onClick={(key) => {
            document
              .getElementById(key.key)
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        />
        <div className="flex justify-center items-center">
       
          <ShoppingCart />
          <Button
            className="md:hidden ml-4"
            type="text"
            icon={<MenuOutlined className="!text-xl" />}
            onClick={() => setDrawerVisible(true)}
          />
          <div className="flex  gap-4"></div>
          {/* Drawer for mobile menu */}
          <Drawer
            title="Menu"
            placement="right"
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
          >
            <Menu
              mode="vertical"
              items={[
                { key: "about", label: "Về chúng tôi" },
                { key: "products", label: "Sản Phẩm" },
                { key: "image", label: "Hình Ảnh" },
                { key: "contact", label: "Liên Hệ" },
              ]}
              onClick={(key) => {
                document
                  .getElementById(key.key)
                  ?.scrollIntoView({ behavior: "smooth" });
                setDrawerVisible(false);
              }}
            />
          </Drawer>
        </div>
      </div>
    </Header>
  );
};

export default MenuComponent;
