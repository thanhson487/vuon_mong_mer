import React from "react";
import { Card, Col, Row, Typography } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }} // Chỉ chạy 1 lần khi vào viewport
    >
      <div className="px-2 md:px-32 py-2 bg-gray-100" id="about">
        <Row gutter={[24, 24]}>
          {/* Text Section */}
          <Col xs={24} lg={12}>
            <div className=" ">
              <Title level={2} className="text-green-700">
                Về Vườn Mộng Mer
              </Title>
              <Title level={4} className="text-gray-800">
                🌿✨ Khi giấc mơ hóa hương thơm 🕯️🌸
              </Title>
              <Paragraph>
                Ở một góc nhỏ của thế giới, nơi thời gian trôi chậm lại, có một
                khu vườn chẳng bao giờ úa tàn. Ở đó, từng ngọn nến không chỉ tỏa
                sáng, mà còn kể những câu chuyện dịu dàng. Đó là Vườn mộng mer –
                khu vườn được tạo nên từ ánh sáng, màu sắc và những giấc mơ.
              </Paragraph>
              <Paragraph>
                🌵 Một chậu xương rồng bé nhỏ, nhưng lại kiên cường giữa sa mạc
                rộng lớn. Nó nhắc ta nhớ rằng dù thế giới có khắc nghiệt thế
                nào, chỉ cần một tia sáng ấm áp, ta vẫn có thể vững vàng.
              </Paragraph>
              <Paragraph>
                🌸 Một bông hoa hồng bung nở, đẹp kiêu sa nhưng cũng thật mềm
                mại, như những khoảnh khắc dịu dàng giữa bộn bề cuộc sống, như
                những yêu thương ta dành cho nhau mà không cần lời nói.
              </Paragraph>
              <Paragraph>
                🌱 Một mảng cỏ xanh mướt, biểu tượng của hy vọng và bình yên,
                nhắc nhở rằng dù ngày hôm nay có ra sao, ngày mai vẫn luôn rộng
                mở.
              </Paragraph>
              <Paragraph>
                Mỗi ngọn nến trong khu vườn này không chỉ là một tác phẩm nghệ
                thuật, mà còn là{" "}
                <b>
                  một câu chuyện, một món quà, một lời nhắn gửi yêu thương.{" "}
                </b>
                Khi ánh nến lung linh, cũng là lúc không gian trở nên ấm áp, dịu
                dàng hơn.{" "}
                <b>
                  Bạn không chỉ thắp sáng một ngọn nến, mà còn thắp sáng cả
                  những cảm xúc, những kỷ niệm và những ước mơ.
                </b>
              </Paragraph>
              <Title level={5} className="text-gray-800">
                🕯️ Hãy để "Vườn mộng mer" mang đến cho bạn một khu vườn thu nhỏ
                trong ánh sáng – nơi giấc mơ nở hoa, nơi mỗi ngày đều có một
                chút phép màu! ✨💖
              </Title>
              <Title level={4} className="text-gray-800">
                🌿✨ Vườn mộng mer – Nến nghệ thuật từ những khu vườn đầy cảm
                hứng ✨🌿
              </Title>
              <Paragraph>
                Bộ sưu tập nến của <b>Vườn mộng mer</b> là những khu vườn thu nhỏ, nơi
                ánh sáng hòa cùng sắc màu thiên nhiên, tạo nên những tác phẩm
                đầy cảm xúc. Từng ngọn nến không chỉ là vật trang trí, mà còn
                mang đến sự ấm áp, thư giãn và ý nghĩa sâu sắc.
              </Paragraph>
             
             
            </div>
          </Col>

          {/* Image Section */}
          <Col xs={24} lg={12}>
            <div
              className="h-[500px] md:h-[700px] w-full bg-cover bg-center rounded-2xl shadow-md"
              style={{
                backgroundImage: "url('https://picsum.photos/700/700')",
              }}
            ></div>
          </Col>
        </Row>
      </div>
    </motion.div>
  );
};

export default About;
