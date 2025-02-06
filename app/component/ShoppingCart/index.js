"use client";
import { shoppingCartAtom } from "@/app/jotal";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Popover } from "antd";
import { useAtomValue } from "jotai";
import React, { useEffect, useState } from "react";
import CartPreview from "./CartPreview";
import { useRouter } from "next/navigation";
const ShoppingCart = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  const router = useRouter();
  const productCart = useAtomValue(shoppingCartAtom);
  useEffect(() => {
    if (!productCart) return;
    const value = productCart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalProduct(value);
  }, [productCart]);

  return (
    <div>
      <Popover placement="bottom" content={<CartPreview />} trigger={"hover"}>
        <Badge count={totalProduct}>
          <ShoppingCartOutlined className="text-2xl" onClick={() =>router.push("/cart")} />
        </Badge>
      </Popover>
    </div>
  );
};

export default ShoppingCart;
