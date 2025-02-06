import React, { useCallback, useState } from "react";
import { Row, Col } from "antd";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { motion } from "framer-motion";
import ImageViewer from "react-simple-image-viewer";
import { CloseCircleFilled } from "@ant-design/icons";
import { CloseButton } from "../../Common/CloseButton";
import styled from "styled-components";
const weddingPhotos = ["/image/cover.png", "/image/gai_diu_dang.jpg"];

const Album = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }} // Chỉ chạy 1 lần khi vào viewport
      id="image"
    >
      <div className="p-4 my-4 md:my-10 mx-auto">
        <h2 className="text-center text-2xl font-bold text-green-800 mb-6">
          Hình ảnh sản phẩm
        </h2>
        <Row gutter={[16, 16]}>
          {weddingPhotos.map((photo, index) => (
            <Col key={index} xs={24} sm={12} md={6} lg={6}>
              <div className="rounded-lg shadow-md">
                <img
                  src={photo}
                  alt={`Wedding Photo ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onClick={() => openImageViewer(index)}
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
      {isViewerOpen && (
        <CustomView>
          <ImageViewer
            src={weddingPhotos}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll
            closeOnClickOutside={true}
            backgroundStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            closeComponent={<CloseButton onClose={closeImageViewer} />}
          />
        </CustomView>
      )}
    </motion.div>
  );
};

export default Album;
const CustomView = styled.div`
  .react-simple-image-viewer__close {
    opacity: 1;
  }
`;
