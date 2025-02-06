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
import About from "./component/Home/About";
import Footer from "./component/Footer";
import Album from "./component/Home/Album";
import LinkShop from "./component/Home/LinkShop";
import Product from "./component/Home/Product";
import Cover from "./component/Home/Cover";

const {  Content } = Layout;
export default function Home() {
  return (
    <div>
      <MenuComponent />
      <div className="h-36"></div>
      <Content>
        <Cover />
      </Content>
      <Content className="my-7" >
        <About/>
      </Content>
      <Content className="px-2 md:px-32">
        <Product />
      </Content>
      <Content className="px-2 md:px-32 bg-gray-100">
        <Album />
      </Content>
      <LinkShop />
      <Footer />
    </div>
  );
}
