import exit from "../assets/remove.png"
import React from "react";

const Panel = ({ Data }) => {
  const closeform = () => {
    document.querySelector(".Panel").style.display = "none";
    window.scrollTo(0, 0);
  };

  return (
    <div className="panel">
      <div className="result-form">
        <img
          src={exit}
          alt="exit_icon"
          width={30}
          height={30}
          className="close-panel-icon"
          onClick={closeform}
        ></img>
        <div className="panel-info">
          <div className="info flex-row">
            <div className="panel-img-container">
              <img src={Data.img} alt="img" className="panel-img"></img>
            </div>

            <div className="hero flex-col">
              <div className="flex-self-start panel-script">Bạn thuộc nhóm tính cách</div>
              <div className="panel-title">{Data.name} - {Data.description}</div>
              <p>{Data.content}</p>
              <p>
                Có thể bạn chưa biết: {Data.people} và nhiều nhân vật tiêu biểu
                khác có cùng nhóm tính cách với bạn
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;