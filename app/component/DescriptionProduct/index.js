"use client";
import { Typography, Divider } from "antd";
import React from "react";
const { Title, Paragraph } = Typography;

const DescriptionProduct = () => {
    return (
       <div className="w-[80%] m-auto">
      <Title level={2} className="mb-4">Thông tin</Title>

      {/* Vietnamese Section */}
      <section className="mb-8">
        <Title level={3} className="text-green-600 mb-2">GIỚI THIỆU SẢN PHẨM</Title>
        <Paragraph className="mb-4">
          Cây Phất tài núi hay còn được gọi là Madagascar Dragon tree, đây là một loại cây sinh trưởng rất chậm, sức sống rất bền bỉ, dễ dàng thích nghi với nhiều điều kiện môi trường từ trong nhà đến ngoài trời và nhiều tầng lá xanh luôn tạo cảm giác tươi tắn.
        </Paragraph>
        <Paragraph className="mb-4">
          Cùng chính vì thế mà người ta tin rằng cây đem lại nguồn sinh khí dồi dào, thoải mái cho không gian sống, không gian làm việc. Đây cũng là món quà tặng tân gia, khai trương, lễ kỷ niệm,... vô cùng ý nghĩa, cầu chúc cho người nhận có cuộc sống suôn sẻ, thịnh vượng và tài lộc.
        </Paragraph>

        <Title level={3} className="text-green-600 mb-2">HƯỚNG DẪN CHĂM SÓC</Title>
        <Title level={4} className="mb-2">Ánh sáng</Title>
        <Paragraph className="mb-4">
          Phất tài núi là cây ưa nắng, nên đặt cây ở những nơi có nhiều ánh nắng/ánh sáng tự nhiên như ban công, sân vườn, phòng khách, các vị trí có nhiều cửa sổ, cửa kính đón nắng.
        </Paragraph>

        <Title level={4} className="mb-2">Tưới nước</Title>
        <ul className="list-disc list-inside mb-4">
          <li>Cây chịu hạn tốt nên bạn chỉ cần tưới ẩm 1-2 lần/tuần.</li>
          <li>Không nên tưới quá nhiều, sẽ khiến cây dễ úng, thối rễ.</li>
        </ul>

        <Title level={4} className="mb-2">Giá thể</Title>
        <Paragraph className="mb-4">
          Yêu cầu thoát nước tốt. Các bạn có thể tham khảo giá thể cao cấp được phân phối độc quyền tại Joy Garden.
        </Paragraph>

        <Divider className="my-6" />
      </section>

      {/* English Section */}
      <section>
        <Title level={3} className="text-green-600 mb-2">PLANT INFORMATION</Title>
        <Paragraph className="mb-4">
          Dragon tree is also known as Madagascar dragon tree, they have long, pointed leaves on stems that emerge from a thick trunk. This is a very slow-growing species but one that is very long-lived making it a tree that can be grown indoors and outdoors.
        </Paragraph>

        <Title level={3} className="text-green-600 mb-2">GENERAL PLANT CARE</Title>
        <Title level={4} className="mb-2">Sunlight</Title>
        <Paragraph className="mb-4">
          Direct sunlight or bright shade.
        </Paragraph>

        <Title level={4} className="mb-2">Water</Title>
        <ul className="list-disc list-inside mb-4">
          <li>Water every 1-2 times a week, allowing the soil to dry slightly between watering intervals, do not let the roots sit in water.</li>
          <li>Expect to water more often in brighter light and less often in lower light.</li>
        </ul>

        <Title level={4} className="mb-2">Soil</Title>
        <Paragraph>
          Use a well-draining potting mix. You can refer to premium potting mix, exclusive supply at Joy Garden.
        </Paragraph>
      </section>
    </div>
    );
}

export default DescriptionProduct;
