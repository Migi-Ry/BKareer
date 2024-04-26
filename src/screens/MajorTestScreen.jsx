import { Link } from "react-router-dom";
import image from "../assets/images/graduationOrCareerChoice.jpg"

function MajorTest() {
  return (
    <body className="body card">
      <div className="screen-title">Bài kiểm tra định hướng ngành nghề</div>
      <img src={image} className="img-major"/>
      <div className="font-20">Bài kiểm tra định hướng ngành nghề BKareer bao gồm 2 phần: Bài trắc nghiệm tính cách MBTI và Bài trắc nghiệm khám phá năng lực nghề nghiệp. Sau khi hoàn thành cả 2 phần trên, bạn sẽ khám phá được những điểm nổi trội của mình và nhận được gợi ý các thông tin ngành nghề - nghề nghiệp bạn nên ưu tiên tìm hiểu.</div>
      <div className="font-20 margin-bottom-2rem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <Link className="primary-btn font-18 align-center" to="/mbti">Bắt đầu ngay</Link>
      <div className="align-center width-fit-content margin-top-1rem">
        <span className="font-18">Đã thực hiện kiểm tra? </span>
        <Link className="primary-txt-btn font-18" to="/majorResult">Nhập kết quả ngay</Link>
      </div>
      
    </body>
  );
}

export default MajorTest;
