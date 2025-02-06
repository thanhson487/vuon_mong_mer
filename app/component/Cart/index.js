"use client";
import { shoppingCartAtom } from "@/app/jotal";
import { formatCurrency } from "@/helper";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Divider, Form, InputNumber, notification } from "antd";
import { useAtom } from "jotai";
import { find } from "lodash";
import { useEffect, useState } from "react";
import DialogModal from "./DialogModal";
import DialogModalSuccess from "./DialogModalSuccess";
const Cart = () => {
  const [form] = Form.useForm();
  const [summary, setSummary] = useState(0);
  const [dialogModal, setDialogModal] = useState(false);
  const [dialogSuccess, setDialogSuccess] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [productCart, setProductCart] = useAtom(shoppingCartAtom);
  const handleSubmit = () => {
    setDialogModal(true);
  };
  useEffect(() => {
    handleChange();
  }, []);
  const initialValues = productCart.reduce((acc, item) => {
    acc[item.id] = item.quantity; // Lưu quantity của từng sản phẩm vào form
    return acc;
  }, {});
  const handleChange = () => {
    const value = form.getFieldsValue(true);
    let total = 0;
    for (let key in value) {
      const productFilter = find(
        productCart,
        (item) => item.id === Number(key)
      );
      total += productFilter.salePrice * Number(value[key]);
    }
    const cloneProduct = productCart.map((item) => {
      const quantity = value[item.id];
      return { ...item, quantity };
    });
    setProductCart(cloneProduct);
    setSummary(total);
  };
  if (productCart.length === 0)
    return (
      <div className="shadow-md mb-5 p-5  mx-auto">
        Không có sản phẩm nào trong giỏ hàng
      </div>
    );
  const handleDetele = (item) => {
    const newCart = productCart.filter((items) => items.id !== item.id);
    const shoppingNew = newCart.map((item) => {
      return {
        ...item,
        quantity: form.getFieldValue(item.id),
      };
    });
    setProductCart(shoppingNew);
   
  };
  return (
    <div className="shadow-md mb-5 p-5 w-full md:w-2/3 mx-auto">
      {contextHolder}
      <Form form={form} layout="vertical" initialValues={initialValues}>
        <div className="w-full">
          {productCart?.map((item) => (
            <div key={item.id} className="">
              <div
                key={item.id}
                className="flex  flex-citems-center justify-center"
              >
                <img
                  src={item.mainImage}
                  width={100}
                  height={100}
                  className="rounded"
                />
                <div className="ml-3 flex flex-col sm:flex-row justify-between w-full">
                  <div className="text-base text-gray-800 truncate flex flex-col">
                    {item.title}
                    <div
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleDetele(item)}
                    >
                     
                      <DeleteOutlined className="" /> Xóa
                    </div>
                  </div>
                  <div>{formatCurrency(item.salePrice)}</div>
                  <Form.Item
                    name={`${item.id}`}
                    className="text-red-500 text-sm font-bold"
                  >
                    <InputNumber min={1} onBlur={handleChange} />
                  </Form.Item>
                </div>
              </div>
              <Divider />
            </div>
          ))}
        </div>
      </Form>
      <div className="font-bold w">Tổng số tiền: {formatCurrency(summary)}</div>
      {productCart.length > 0 && (
        <div className="text-center">
          <Button type="primary" onClick={handleSubmit}>
            Tiến thành đặt hàng
          </Button>
        </div>
      )}
      <DialogModal
        open={dialogModal}
        setOpen={setDialogModal}
        summary={summary}
        setDialogSuccess={setDialogSuccess}
      />
      <DialogModalSuccess open={dialogSuccess} setOpen={setDialogSuccess} />
    </div>
  );
};

export default Cart;
