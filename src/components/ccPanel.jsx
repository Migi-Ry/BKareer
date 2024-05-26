import React from "react";
import exit from "../assets/remove.png";
import clusterList from "../database/CCMajor.js";

const Panel = ({ majorName, onClose , isOpen}) => {
  // const closeForm = () => {
  //   document.querySelector(".CCPanel").style.display = "none";
  //   window.scrollTo(0, 0);
  // };

  // Lấy dữ liệu từ file CCMajor.js dựa trên tên ngành
  
  const majorData = clusterList.getdata(majorName);

  // if (!majorData || typeof majorData !== 'object') {
  //   return <div>Loading...</div>; // Hoặc thông báo lỗi khác tùy thuộc vào trường hợp của bạn
  // }

  // // Kiểm tra nếu majorData không chứa thuộc tính 'img'
  // if (!majorData.img) {
  //   return <div>Không có hình ảnh cho ngành này</div>; // Hoặc thông báo lỗi khác tùy thuộc vào trường hợp của bạn
  // }

  return (
    <div className="Panel" style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className="result-form">
        <img
          src={exit}
          alt="exit_icon"
          width={30}
          height={30}
          className="img-panel"
          onClick={onClose}
        />
        <div className="panel-info">
          <div className="info">
            <div className="panel-title margin-bottom-2rem align-center width-fit-content">{majorData.name}</div>
            <div className="flex-row hero">
              <img src={majorData.img} alt="img" height={100}></img>
              <p>{majorData.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
