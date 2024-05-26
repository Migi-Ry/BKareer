import exit from "../assets/remove.png"
import React from "react";

const Panel = ({ Data }) => {
  const closeform = () => {
    document.querySelector(".Panel").style.display = "none";
    // window.scrollTo(0, 0);
  };

  return (
    <div className="Panel">
      <div className="result-form">
        <img
          src={exit}
          alt="exit_icon"
          width={30}
          height={30}
          className="img-panel"
          onClick={closeform}
        />

        <div className="panel-info">
          <div className="info">
            <div className="hero">
              <img src={Data.img} alt="img" width={100} height={100}></img>
              <span className="panel-title margin-bottom-0">{Data.description}</span>
            </div>

            <div className="margin-top-2rem">{Data.content}</div>
            <div className="margin-top-1rem">
              Có thể bạn chưa biết: {Data.people} và nhiều nhân vật tiêu biểu khác có cùng nhóm tính cách với bạn.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Panel;