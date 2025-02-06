"use client";
import React from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-[url(/image/404.jpg)] bg-center bg-no-repeat bg-cover text-center ">
      <div className="relative">
        <div className="relative z-10 text-white p-8 bg-opacity-60  ">
          <h1 className="text-3xl font-bold mb-4">404</h1>
          <h2 className="text-4xl  font-semibold mb-2">Trang không tồn tại</h2>
          <p className="mb-6">
            Xin lỗi, hiện tại Vườn mộng mơ không tìm thấy trang bạn yêu cầu có
            thể sai đường dẫn. Vui lòng kiểm tra lại.
          </p>
          <Button type="primary" size="large" onClick={() => router.push("/")}>
            Trở về trang chủ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
