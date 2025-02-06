"use client";
import React, { useEffect, useState, Suspense } from "react";
import { Card, Collapse, notification, Skeleton } from "antd";
import { InputNumber, Button, Badge } from "antd";
import {
  LeftOutlined,
  MinusOutlined,
  PlusOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import MenuComponent from "../component/Menu";
import DescriptionProduct from "../component/DescriptionProduct";
import Footer from "../component/Footer";
import { Slide } from "react-slideshow-image";
import { useRouter, useSearchParams } from "next/navigation";
import { LIST_PRODUCT } from "../Constant";
import { find } from "lodash";
import NotFoundPage from "../component/Common/NotFoundPage";
import { formatCurrency } from "@/helper";
import { useAtom } from "jotai";
import { shoppingCartAtom } from "../jotal";

const ProductDetail = () => {
  const [inputValue, setInputValue] = useState(1);
  const [detailProduct, setDetailProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const [productCart, setProdctCart] = useAtom(shoppingCartAtom);
  const [mainImage, setMainImage] = useState();
  const id = searchParams.get("id");
  const [api, contextHolder] = notification.useNotification();
  useEffect(() => {
    if (!detailProduct) return;
    setMainImage(detailProduct.image[0]);
  }, [detailProduct]);

  useEffect(() => {
    setLoading(true);
    if (!id) {
      setLoading(false);
      return;
    }
    const product = find(LIST_PRODUCT, (item) => item.id === Number(id));
    setDetailProduct(product);
    setLoading(false);
  }, [id]);

  const handleAddProductToCard = () => {
    const item = find(productCart, (item) => item.id === detailProduct.id);
    if (item) {
      const newProduct = {
        ...item,
        quantity: item.quantity + inputValue,
      };
      setProdctCart(
        productCart.map((item) =>
          item.id === detailProduct.id ? newProduct : item
        )
      );
    } else {
      setProdctCart([
        ...productCart,
        { ...detailProduct, quantity: inputValue },
      ]);
    }
    setInputValue(1);
    api.success({
      message: "Thêm giỏ hàng thành công",
      placement: "top",
      duration: 3,
    });
  };
  if (loading) return <Skeleton />;
  if (!detailProduct) return <NotFoundPage />;
  return (
    <div>
   
      <MenuComponent />   {contextHolder}
      <div className="h-20"></div>
      <div className="flex flex-col md:flex-row gap-4 p-4  md:w-[80%] m-auto">
        {/* Left Section: Image Gallery */}
        <div className="flex items-center flex-col md:w-1/2">
          <div className=" mb-4">
            <img src={mainImage} className="w-min-[600px] w-[600px] h-auto " />
          </div>
          <div className=" w-full flex">
            {detailProduct?.image.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className="rounded-md cursor-pointer border hover:border-blue-500 mr-2 h-auto mb-2 w-max-[150px] w-[150px]"
                onClick={() => setMainImage(thumbnail)}
              />
            ))}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="md:w-1/2">
          <Card bordered={false}>
            <div className="text-[#00a76f] text-3xl font-bold mb-3">
              {detailProduct.title}
            </div>
            <div className="flex items-end">
              <div className="text-[#00a76f] text-2xl mr-2">
                {formatCurrency(detailProduct.salePrice)}
              </div>
              <div className="line-through text-[16px] text-[#ff1b1b]">
                {formatCurrency(detailProduct.price)}
              </div>
            </div>
            {detailProduct.story}
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
              <Button type="primary" onClick={handleAddProductToCard}>
                Thêm vào giỏ hàng
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Gọi đặt mua:{" "}
              <a href="tel:0962841055" className="text-blue-500">
                0962841055
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
      <DescriptionProduct description={detailProduct.description} />
      <Footer />
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <ProductDetail />
    </Suspense>
  );
};

export default Page;
