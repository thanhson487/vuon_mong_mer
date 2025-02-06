"use client";
import { shoppingCartAtom } from "@/app/jotal";
import { formatCurrency } from "@/helper";
import { Form, Modal, Input, notification } from "antd";
import axios from "axios";
import { useAtomValue } from "jotai";
import { set } from "lodash";
import React from "react";

const DialogModal = ({ open, setOpen, summary, setDialogSuccess }) => {
  const [api, contextHolder] = notification.useNotification();
  const productCart = useAtomValue(shoppingCartAtom);
  const BOT_TOKEN = "7561592596:AAF8R4Y75u8nKElVmO4av8hG5qcohyG_9Lc"; // Thay token của bạn
  const CHAT_ID = "5327239295"; // Thay chat_id của bạn
  const TELEGRAM_API = `/bot${BOT_TOKEN}/sendMessage`;
  const sendOrderToTelegram = async (values) => {
    let covertNameValue = "";
    productCart.forEach((item) => {
      covertNameValue =
        covertNameValue +
        `${item.title}
        Số lượng: ${item.quantity}
      `;
    });
    const message = `
      🛒 *ĐƠN HÀNG MỚI* 🛒
      👤 Họ tên: ${values.username}
      📞 SĐT: ${values.phoneNumber}
      📍 Địa chỉ: ${values.address}
      💰 Tổng tiền: ${formatCurrency(summary)} VNĐ
      Thông tin đơn hàng:  
      ${covertNameValue}
    `;

    try {
      
      await axios.post(`/api/${TELEGRAM_API}`, {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      });
      setDialogSuccess(true);
      setOpen(false);
    } catch (error) {
      api.error({
        message: `Thông báo`,
        description: "Đã xảy ra lỗi, vui lòng thử lại sau!",
        placement: "top",
        duration: 3,
      });
    }
  };

  const [form] = Form.useForm();
  const handleSubmit = async () => {
    try {
        await form.validateFields();
        sendOrderToTelegram(form.getFieldsValue());
      } catch (error) {
        console.log(error);
      }
   
  };
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      title="Thông tin thanh toán"
      onOk={handleSubmit}
      destroyOnClose
    >
      <Form layout="vertical" form={form}>
        <Form.Item
          label="Họ và tên"
          name="username"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập họ tên",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Số điện thoại"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập số điện thoại",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Địa chỉ nhận hàng"
          name="address"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập địa chỉ nhận hàng",
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default DialogModal;
