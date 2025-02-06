import { Card } from "antd";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { LIST_PRODUCT } from "@/app/Constant";
import { formatCurrency } from "@/helper";

const Product = () => {
  const router = useRouter();
  const handleClickItem = (id) => {
    router.push(`/product-detail?id=${id}`);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }} // Chỉ chạy 1 lần khi vào viewport
      id="products"
    >
      <div>
        <h2 className="text-center text-2xl font-bold text-green-800 mb-6">
          SẢN PHẨM NỔI BẬT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-6">
          {LIST_PRODUCT.map((product, index) => (
            <Card
              key={index}
              hoverable
              cover={
                <img
                  alt={product.title}
                  src={product.image[0]}
                  className="rounded-t-xl"
                />
              }
              className="rounded-lg shadow-lg"
              size="small"
              onClick={() => handleClickItem(product.id)}
            >
              <Card.Meta
                title={
                  <div className="text-lg font-semibold text-center">
                    {product.title}
                  </div>
                }
                description={
                  <div className="text-green-700 font-medium text-center">
                    {formatCurrency(product.price)}
                  </div>
                }
              />
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
