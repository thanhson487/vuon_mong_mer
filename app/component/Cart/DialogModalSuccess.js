"use client";
import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Typography, Button, Space, Modal } from "antd";
import DialogModal from "./DialogModal";
import { useRouter } from "next/navigation";
import { useResetRecoilState } from "recoil";
import { shoppingCartAtom } from "@/app/jotal";
import { useSetAtom } from "jotai";

const { Title, Text, Link } = Typography;

const DialogModalSuccess = ({ open, setOpen }) => {
 const resetProductCart = useSetAtom(shoppingCartAtom);
  const router = useRouter();
  const generateRandomCode = () => {
    const randomNumber = Math.floor(10000 + Math.random() * 90000); // Tạo số có 5 chữ số
    return `vuonmongmer_${randomNumber}`;
  };
  return (
    <Modal open={open} onCancel={() => setOpen(false)} footer={null}>
      <div className="flex flex-col items-center justify-center bg-white">
        <CheckCircleOutlined className="text-green-500 text-6xl mb-4" />
        <Title level={4} className="text-gray-800">
          Đặt hàng thành công
        </Title>
        <Text>
          Mã số đơn hàng của bạn là{" "}
          <Text strong className="text-green-600">
            {generateRandomCode()}
          </Text>
          .
        </Text>
        Chúng tôi sẽ sớm liên lạc lại đến bạn để xác nhận thông tin
        <Button
          type="primary"
          className="mt-5 px-6 py-2"
          onClick={() => {
            setOpen(false);
            resetProductCart([]);
            router.push("/");
          }}
        >
          Trang chủ
        </Button>
      </div>
    </Modal>
  );
};

export default DialogModalSuccess;
