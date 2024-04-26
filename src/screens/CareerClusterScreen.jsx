import CC from "../database/CCQuest";
import React, { useState } from "react";
import Result from "../database/Result.js";
import { Link } from 'react-router-dom';

function CCTest() {
  const [checkboxStates, setCheckboxStates] = useState(
    CC.map(() => ({
      activities: Array(7).fill(false),
      qualities: Array(5).fill(false),
      subjects: Array(5).fill(false),
    }))
  );

  const handleCheckboxChange = (questionIndex, type, subIndex) => {
    setCheckboxStates((prevCheckboxStates) => {
      const newState = prevCheckboxStates.map((item, index) => {
        if (index === questionIndex) {
          return {
            ...item,
            [type]: item[type].map((state, i) => (i === subIndex ? !state : state)),
          };
        }
        return item;
      });
      return newState;
    });
  };

  const calculateScore = () => {
    const scores = checkboxStates.map((item) => ({
      activities: item.activities.reduce((total, state) => (state ? total + 1 : total), 0),
      qualities: item.qualities.reduce((total, state) => (state ? total + 1 : total), 0),
      subjects: item.subjects.reduce((total, state) => (state ? total + 1 : total), 0),
    }));
    return scores;
  };
  
  const findHighestScoredItem = (scores) => {
    let highestIndex = 0;
    let highestScore = scores[0].activities + scores[0].qualities + scores[0].subjects;
    scores.forEach((score, index) => {
      const totalScore = score.activities + score.qualities + score.subjects;
      if (totalScore > highestScore) {
        highestIndex = index;
        highestScore = totalScore;
      }
    });
    return highestIndex;
  };
  
  const mapHighestScoredItemToMajor = (highestIndex) => {
    const majors = [
      "Nông nghiệp, Thực phẩm và Tài nguyên thiên nhiên",
      "Kiến trúc và xây dựng",
      "Nghệ thuật, Công nghệ A/V và Truyền thông",
      "Kinh doanh, quản lí và quản trị",
      "Giáo dục và đào tạo",
      "Tài chính",
      "Chính phủ và hành chính công",
      "Y tế",
      "Du lịch",
      "Dịch vụ con người",
      "Công nghệ",
      "Luật, An toàn công cộng, Sửa chữa và bảo mật",
      "Kỹ thuật",
      "Thương mại",
      "Khoa học",
      "Phân phối và hậu cần",
    ];
    return majors[highestIndex];
  };
  
  const scores = calculateScore(); // Tính điểm cho từng ô
  const highestScoredItemIndex = findHighestScoredItem(scores); // Xác định ô có điểm cao nhất
  const highestScoredMajor = mapHighestScoredItemToMajor(highestScoredItemIndex); // Ánh xạ ô có điểm cao nhất vào nhóm ngành tương ứng
  console.log("Nhóm ngành có điểm cao nhất là:", highestScoredMajor);

  return (
    <>
      <body className="body">
        <div className="screen-title">Khám phá năng lực nghề nghiệp</div>
        <div className="CC-instruction-txt font-18">
          <span className="bold-txt">Hướng dẫn: </span>
          <span>Đánh dấu các mục trong mỗi ô mô tả chính xác nhất về bạn. Bạn có thể chọn một hoặc nhiều mục trong mỗi ô. Sau khi hoàn thành, hệ thống sẽ hiển thị kết quả ba ô có số điểm cao nhất và các Nhóm ngành tương ứng. Bạn cũng có thể xem thêm các Nhóm ngành khác để xem bạn có thể muốn khám phá những Nhóm ngành nào.</span>
        </div>
        {CC.map((item, index) => (
          <div className="CC-card flex-row flex-items-center" key={index}>
            <div className="CC-card-title-txt">{item.title}</div>

            <div className="CC-activities-block flex-col flex-self-start">
              <div className="bold-txt font-20">Những hoạt động miêu tả những điều tôi thích làm:</div>
              {Object.keys(item.activities[0]).map((key, subIndex) => (
                <div className="font-18" key={subIndex}>
                  <input
                    type="checkbox"
                    className="CC-checkbox"
                    checked={checkboxStates[index].activities[subIndex]}
                    onChange={() => handleCheckboxChange(index, 'activities', subIndex)}
                  />
                  {item.activities[0][key]}
                </div>
              ))}
            </div>

            <div className="CC-separate-line"></div>

            <div className="CC-qualities-block flex-col flex-self-start">
              <div className="bold-txt font-20">Các phẩm chất cá nhân miêu tả về tôi:</div>
              {Object.keys(item.qualities[0]).map((key, subIndex) => (
                <div className="font-18" key={subIndex}>
                  <input
                    type="checkbox"
                    className="CC-checkbox"
                    checked={checkboxStates[index].qualities[subIndex]}
                    onChange={() => handleCheckboxChange(index, 'qualities', subIndex)}
                  />
                  {item.qualities[0][key]}
                </div>
              ))}
            </div>

            <div className="CC-separate-line"></div>

            <div className="CC-subjects-block flex-col flex-self-start">
              <div className="bold-txt font-20">Môn học yêu thích của tôi:</div>
              {Object.keys(item.subjects[0]).map((key, subIndex) => (
                <div className="font-18" key={subIndex}>
                  <input
                    type="checkbox"
                    className="CC-checkbox"
                    checked={checkboxStates[index].subjects[subIndex]}
                    onChange={() => handleCheckboxChange(index, 'subjects', subIndex)}
                  />
                  {item.subjects[0][key]}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex-row align-center width-fit-content">
          <Link to={`/majorResult?ccResult=${highestScoredMajor}`} className="primary-btn font-18 width-45 margin-right-3rem">Quay về nhập kết quả</Link>
          <button className="primary-btn font-18">Xem kết quả</button>
        </div>
      </body>
    </>
  );
}

export default CCTest;
