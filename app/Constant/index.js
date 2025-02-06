import { Typography } from "antd";
const { Title } = Typography;
export const LIST_PRODUCT = [
  {
    id: 1,
    title: "Hoa Mộng Mơ",
    salePrice: "350000",
    price: "500000",
    mainImage:  "/image/nang_mong_mo.jpg",
    image: ["/image/nang_mong_mo.jpg", "/image/gai_diu_dang.jpg"],
    story: (
      <>
        <Title level={4} className="text-gray-800">
          Hoa Mộng Mơ – Khi Yêu Thương Hóa Thành Ánh Sáng
        </Title>
        <Typography>
          Trong một khu vườn huyền diệu, nơi những giấc mơ được ươm mầm bằng
          tình yêu và sự dịu dàng, có một loài hoa mang tên <b>Hoa mộng mơ</b>.
          Đó không chỉ là một loài hoa bình thường, mà là những cánh hoa được
          dệt từ ánh sáng, ấp ủ bởi những nguyện ước đẹp đẽ nhất.
        </Typography>
        <br />
        <Typography>
          Chuyện kể rằng, mỗi bông <b>Hoa Mộng Mơ </b>đều ẩn chứa một điều ước
          của người tặng dành cho người nhận. Khi ánh nến bừng sáng, cũng là lúc
          những lời chúc tốt đẹp lan tỏa trong không gian – mang đến sự bình
          yên, hạnh phúc và những khoảnh khắc dịu dàng nhất.
        </Typography>{" "}
        <br />
        <Typography>
          Mỗi khi bạn thắp sáng ngọn nến này, hãy nhắm mắt lại và lắng nghe trái
          tim mình. Đó có thể là lời yêu thương chưa kịp nói, một ký ức đẹp đẽ
          cần được sưởi ấm hay chỉ đơn giản là phút giây thư giãn giữa bộn bề
          cuộc sống. <b>Hoa Mộng Mơ</b> không chỉ là một món quà, mà còn là cầu
          nối giữa những tâm hồn yêu thương, là phép màu nhỏ bé giúp chúng ta
          tin vào những điều tốt đẹp.
        </Typography>
        <Title level={5} className="text-gray-800">
          Hãy dành tặng “Hoa Mộng Mơ” cho người bạn yêu quý, như một lời chúc
          dịu dàng gửi đến trái tim họ. Vì mỗi ngọn nến thắp lên, là một giấc mơ
          đẹp được gửi gắm trong ánh sáng.
        </Title>
      </>
    ),
    description: (
      <Typography>
        <Title level={5}>🌿 Mô tả sản phẩm: </Title>
        <b>Hoa Mộng Mơ</b> là một mẫu nến trang trí độc đáo, được thiết kế tỉ mỉ
        như một khu vườn thu nhỏ, kết hợp giữa vẻ đẹp của hoa sen đá, hồng cổ
        điển và các loại cây cỏ khác. Mỗi cánh hoa, từng viên sỏi nhỏ hay lớp
        sáp mịn đều được chế tác thủ công, tạo nên một tác phẩm nghệ thuật đầy
        cảm xúc.
        <Title level={5}>✨ Chất liệu:</Title>
        <ul className="list-disc list-inside">
          <li>
            Sáp đậu nành tự nhiên, an toàn cho sức khỏe và thân thiện với môi
            trường.
          </li>
          <li>
            Ngọn lửa nhẹ nhàng, tạo hiệu ứng cháy nổ tí tách như tiếng lửa trại
            ấm áp.
          </li>
          <li>
            Tinh dầu thơm dịu nhẹ, mang lại không gian thư giãn và dễ chịu.
          </li>
        </ul>
        <Title level={5}>💡 Công dụng:</Title>
        <ul className="list-disc list-inside">
          <li>Là món quà tặng ý nghĩa, phù hợp với mọi dịp đặc biệt.</li>
          <li>Tạo không gian ấm cúng, thư giãn và truyền cảm hứng.</li>
          <li>
            Dùng để trang trí góc làm việc, phòng ngủ, bàn trà giúp không gian
            thêm phần tinh tế.
          </li>
        </ul>
        <br />
        <p className="mb-5">
          Không chỉ là một ngọn nến, Hoa Mộng Mơ mang theo những lời chúc chân
          thành và niềm vui trọn vẹn. Khi ánh nến bừng sáng, cũng là lúc những
          giấc mơ đẹp được thắp lên. Hãy dành tặng món quà này cho những người
          thân yêu, hoặc cho chính mình như một cách trân trọng từng khoảnh khắc
          bình yên trong cuộc sống. ✨
        </p>
      </Typography>
    ),
  },
  {
    id: 2,
    title: "Gai Dịu Dàng",
    salePrice: "350000",
    price: "500000",
    mainImage: "/image/gai_diu_dang.jpg",
    image: ["/image/gai_diu_dang.jpg", "/image/nang_mong_mo.jpg"],
    story: (
      <>
        <Title level={4} className="text-gray-800">
          Gai Dịu Dàng – Món Quà Của Sự Kiên Cường Và Yêu Thương
        </Title>
        <Typography>
          Trong một khu vườn nhỏ giữa lòng sa mạc, nơi cát vàng trải dài và nắng
          gió khắc nghiệt, những cây xương rồng vẫn vươn mình mạnh mẽ. Chúng
          khoác lên mình lớp gai nhọn, nhưng bên trong lại tràn đầy sức sống,
          từng ngày chắt chiu nước để nở hoa rực rỡ.
        </Typography>
        <br />
        <Typography>
          <b>"Gai Dịu Dàng"</b> là câu chuyện của những tâm hồn mạnh mẽ – những
          con người bên ngoài có thể cứng cỏi, nhưng bên trong lại chan chứa yêu
          thương. Dù cuộc sống có thử thách, họ vẫn dịu dàng với những người
          xung quanh, vẫn lặng lẽ tỏa sáng như ngọn nến nhỏ sưởi ấm không gian.
        </Typography>
        <br />
        <Title level={5} className="text-gray-800">
          ✨ Món quà này dành cho ai?
        </Title>
        <ul className="list-disc list-inside">
          <li>
            Người bạn thân luôn là chỗ dựa vững chắc nhưng cũng đầy ấm áp.
          </li>
          <li>
            Người yêu thương dù không giỏi thể hiện cảm xúc, nhưng luôn âm thầm
            quan tâm.
          </li>
          <li>
            Chính bạn, như một lời nhắc nhở: Dù cuộc sống có gai góc, hãy luôn
            dịu dàng với chính mình.
          </li>
        </ul>
        <Typography>
          Khi thắp lên <b>Gai Dịu Dàng,</b> ánh nến lung linh như nhắn nhủ rằng:
          Đừng ngại che chở trái tim mình, nhưng cũng đừng quên rằng bạn có
          quyền tỏa sáng, theo cách rất riêng. 💚
        </Typography>
      </>
    ),
    description: (
      <Typography>
        <Title level={5}>🌿 Mô tả sản phẩm: </Title>
        <Typography>
          <b>Gai dịu dàng</b> là một mẫu nến trang trí độc đáo, được thiết kế tỉ
          mỉ như một khu vườn thu nhỏ, kết hợp giữa vẻ đẹp của hoa sen đá, hồng
          cổ điển và các loại cây cỏ khác. Mỗi cánh hoa, từng viên sỏi nhỏ hay
          lớp sáp mịn đều được chế tác thủ công, tạo nên một tác phẩm nghệ thuật
          đầy cảm xúc.
        </Typography>

        <Title level={5}>✨ Chất liệu:</Title>
        <ul className="list-disc list-inside">
          <li>
            Sáp đậu nành tự nhiên, an toàn cho sức khỏe và thân thiện với môi
            trường.
          </li>
          <li>
            Ngọn lửa nhẹ nhàng, tạo hiệu ứng cháy nổ tí tách như tiếng lửa trại
            ấm áp.
          </li>
          <li>
            Tinh dầu thơm dịu nhẹ, mang lại không gian thư giãn và dễ chịu.
          </li>
        </ul>
        <Title level={5}>💡 Công dụng:</Title>
        <ul className="list-disc list-inside">
          <li>Là món quà tặng ý nghĩa, phù hợp với mọi dịp đặc biệt.</li>
          <li>Tạo không gian ấm cúng, thư giãn và truyền cảm hứng.</li>
          <li>
            Dùng để trang trí góc làm việc, phòng ngủ, bàn trà giúp không gian
            thêm phần tinh tế.
          </li>
        </ul>
        <br />
        <p className="mb-5">
          Không chỉ là một ngọn nến, <b>Gai dịu dàng</b> mang theo những lời
          chúc chân thành và niềm vui trọn vẹn. Khi ánh nến bừng sáng, cũng là
          lúc những giấc mơ đẹp được thắp lên. Hãy dành tặng món quà này cho
          những người thân yêu, hoặc cho chính mình như một cách trân trọng từng
          khoảnh khắc bình yên trong cuộc sống. ✨
        </p>
      </Typography>
    ),
  },
 
];
