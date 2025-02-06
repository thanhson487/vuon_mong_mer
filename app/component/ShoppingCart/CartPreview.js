"use client";
import React from "react";
import { Button } from "antd";
import { useAtomValue } from "jotai";
import { shoppingCartAtom } from "@/app/jotal";
import { useRouter } from "next/navigation";
const CartPreview = () => {
  const router = useRouter();
  const productCart = useAtomValue(shoppingCartAtom);
console.log(productCart);

  return (
    <div className="w-[400px] p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-gray-400 text-sm font-semibold mb-3">
        Sản Phẩm Mới Thêm
      </h3>
      <div className="space-y-3">
        {productCart?.map((item) => (
          <div key={item.id} className="flex items-center">
            <img src={item?.mainImage} width={50} height={50} className="rounded" />
            <div className="ml-3 flex justify-between w-full">
              <p className="text-sm text-gray-800 truncate">{item.title}</p>
              <p className="text-red-500 text-sm font-bold">{item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <Button
        className="mt-4 w-full   py-2 rounded-lg font-semibold"
        type="primary"
        onClick={() =>router.push("/cart")}
      >
        Xem Giỏ Hàng
      </Button>
    </div>
  );
};

export default CartPreview;
