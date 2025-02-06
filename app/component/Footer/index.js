import { Input, Button, Card } from "antd";
import {
  PhoneOutlined,
  SendOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <div
      className="bg-gray-100 p-6 flex  flex-col justify-center items-center  bg-[url(https://joygarden.vn/wp-content/uploads/sites/16/2023/08/Heroimage.jpeg)] bg-cover bg-center bg-no-repeat bg-fixed"
    >
      <div className="bg-white shadow-lg rounded-2xl p-6 flex max-w-4xl w-full">
        {/* Left Section */}
        <Card className="w-1/2 p-4 shadow-md">
          <div className="flex items-center text-green-600 text-lg font-semibold">
            <PhoneOutlined className="mr-2" /> 0833 449 449
          </div>
          <p className="text-gray-600 text-sm">Zalo, Viber: 0833 449 449</p>
          <h2 className="text-xl font-semibold mt-3">Joy Garden</h2>
          <p className="flex items-center text-gray-600 text-sm">
            <EnvironmentOutlined className="mr-2" /> 18 Tạ Hiện, P. Thạnh Mỹ
            Lợi, Q2, TP HCM
          </p>
          <a href="#" className="text-green-600 underline text-sm">
            Xem danh sách cửa hàng
          </a>
          <p className="text-gray-600 text-sm mt-3">
            Để được tư vấn về việc mua sản phẩm, quà tặng doanh nghiệp, thuê cây
            văn phòng, thi công ban công/sân vườn...
          </p>
        </Card>

        {/* Right Section */}
        <Card className="w-1/2 p-4 shadow-md ml-4">
          <h3 className="text-lg font-semibold text-green-600">
            Hãy để lại thông tin liên hệ, Joy Garden sẽ phản hồi trong thời gian
            sớm nhất!
          </h3>
          <div className="mt-3">
            <label className="text-sm font-medium text-gray-700">
              Tên của bạn*
            </label>
            <Input
              placeholder="Nhập tên của bạn"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mt-3">
            <label className="text-sm font-medium text-gray-700">
              Điện thoại*
            </label>
            <Input
              placeholder="Nhập số điện thoại"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <Button
            type="primary"
            icon={<SendOutlined />}
            className="mt-4 w-full bg-green-600 border-none"
          >
            Gửi
          </Button>
        </Card>
      </div>
   <div className="text-center text-[#00a76f] mt-2" >Copyright © 2021 Vườn mộng mer. All rights reserved</div>
    </div>
  );
}
