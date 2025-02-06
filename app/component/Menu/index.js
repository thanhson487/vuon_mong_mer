"use client";
import {
    MenuOutlined,
    ShoppingCartOutlined
} from "@ant-design/icons";
import { Button, Drawer, Layout, Menu } from "antd";
import { useState } from "react";
const { Header, Content } = Layout;

const MenuComponent = () => {
      const [drawerVisible, setDrawerVisible] = useState(false);
    return (
        <Header className="bg-white flex justify-between items-center px-4 shadow-md">
        <div className="flex items-center w-full">
          <div className="text-2xl font-bold text-yellow-600 whitespace-nowrap">
            Vườn mộng mơ
          </div>
          <Menu
            mode="horizontal"
            className="hidden md:flex ml-6 flex-grow text-lg"
            style={{
              flexWrap: "nowrap",
              justifyContent: "flex-start",
            }}
            items={[
              { key: "home", label: "Trang Chủ" },
              { key: "about", label: "Về chúng tôi" },
              { key: "products", label: "Sản Phẩm" },
              { key: "services", label: "Dịch Vụ" },
              { key: "care", label: "Hướng Dẫn sử dụng" },
              { key: "news", label: "Tin Tức" },
              { key: "contact", label: "Liên Hệ" },
            ]}
          />

          <Button
            className="md:hidden"
            type="text"
            icon={<MenuOutlined className="text-2xl" />}
            onClick={() => setDrawerVisible(true)}
          />

          {/* Drawer for mobile menu */}
          <Drawer
            title="Menu"
            placement="left"
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
          >
            <Menu
              mode="vertical"
              items={[
                { key: "home", label: "Trang Chủ" },
                { key: "about", label: "Về VSenda" },
                { key: "products", label: "Sản Phẩm" },
                { key: "services", label: "Dịch Vụ" },
                { key: "care", label: "Hướng Dẫn Chăm Sóc" },
                { key: "news", label: "Tin Tức" },
                { key: "contact", label: "Liên Hệ" },
              ]}
            />
          </Drawer>
        </div>
        <div className="flex items-center gap-4">
          <ShoppingCartOutlined className="text-2xl" />
        </div>
      </Header>
    );
}

export default MenuComponent;
