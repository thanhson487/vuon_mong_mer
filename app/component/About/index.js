import React from "react";
import { Card, Col, Row, Typography } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div className="px-32 py-4 bg-gray-100">
      <Row gutter={[24, 24]}>
        {/* Text Section */}
        <Col xs={24} lg={12}>
          <div className=" p-6 ">
            <Title level={2} className="text-green-700">
              Về Joy Garden
            </Title>
            <Paragraph className="text-gray-700 leading-7">
              Joy ra đời năm 2016, xét về tuổi đời là khá trẻ trong thị trường
              cây cảnh. Nhưng với đội ngũ trẻ đầy nhiệt huyết, Joy đã tạo ra rất
              nhiều điểm khác biệt của một business tree, tích cực và năng động
              trong một ngành hàng thực sự già nua.
            </Paragraph>
            <Paragraph className="text-gray-700 leading-7">
              Ở Joy Garden, tôn chỉ kinh doanh là "luôn đúng hẹn, đúng cam kết".
              Với một ngành hàng lâu đời, khi mà các chuẩn mực kinh doanh đã bị
              quên lãng thay vào bằng các thói quen, những lời hứa miệng hay nói
              một đằng làm một nẻo thì những điều đơn giản như "đúng hẹn, đúng
              cam kết" của Joy lại rất đáng quý.
            </Paragraph>
            <Paragraph className="text-gray-700 leading-7">
              Về phong cách thiết kế, chất lượng sản phẩm & dịch vụ thật khó để
              trình bày trong một vài dòng. Quý khách hàng đã quan tâm đọc đến
              đây, hãy bớt chút thời gian tham khảo chi tiết các sản phẩm, dịch
              vụ, tác phẩm thực tế để hoàn thiện để hiểu rõ hơn.
            </Paragraph>
            <Paragraph className="text-gray-700 leading-7">
              Và, nếu quý khách có nhu cầu hay cần tư vấn thêm, hãy để lại thông
              tin liên hệ cho Joy trong form bên dưới, hoặc gọi hotline 0833 449
              449. Luôn sẵn sàng phục vụ.
            </Paragraph>

            <div className="rounded-2xl flex">
              <HomeOutlined className="text-green-700 text-2xl mb-4 " />
              <Title level={4} className="text-gray-800 ml-2">
                Cửa hàng
              </Title>
            </div>
            <Paragraph className="text-gray-600">
              03 cửa hàng bán lẻ tại trung tâm TP Hồ Chí Minh, xử lý hơn 200 đơn
              hàng mỗi ngày.
            </Paragraph>

            <div className="rounded-2xl flex">
              <AppstoreOutlined className="text-green-700 text-2xl mb-4" />
              <Title level={4} className="text-gray-800 ml-2">
                Vườn ươm
              </Title>
            </div>
            <Paragraph className="text-gray-600">
              Showroom và vườn ươm cây công trình hơn 5000m2 tại Đào Kim Cương,
              Quận 2.
            </Paragraph>

            <div className="rounded-2xl flex">
              <TeamOutlined className="text-green-700 text-2xl mb-4" />
              <Title level={4} className="text-gray-800 ml-2">
                Nhân sự
              </Title>
            </div>
            <Paragraph className="text-gray-600">
              +25 chuyên viên chăm sóc cây xanh, 02 xe tải và 04 xe bán tải phục
              vụ giao hàng, đổi cây mọi lúc.
            </Paragraph>
          </div>
        </Col>

        {/* Image Section */}
        <Col xs={24} lg={12}>
          <div
            className="h-[700px] w-full bg-cover bg-center rounded-2xl shadow-md"
            style={{ backgroundImage: "url('https://picsum.photos/700/700')" }}
          ></div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
