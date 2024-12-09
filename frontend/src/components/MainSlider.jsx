import React from "react";
import "./MainSlider.css"; // CSS để định dạng giao diện
import imgBackground from "../../../backend/assets/img_background.png"; // Đường dẫn tới ảnh

const MainSlider = () => {
  return (
    <div className="main-slider">
      <div className="content">
        <h4>Áp dụng cho học sinh sinh viên</h4>
        <h1 className="animated-title">Hè đến - Giảm giá 30%</h1>
        <a href="/menu" className="btn-buy hover:bg-[#633c02]">Mua ngay</a>
      </div>
      <div className="image-container">
        <img
          src={imgBackground}
          alt="Background"
          className="background-image"
        />
      </div>
    </div>
  );
};

export default MainSlider;
