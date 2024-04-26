import { Link } from "react-router-dom";

import image1 from "../assets/images/graduationOrCareerChoice.jpg"
import image2 from "../assets/images/ikigai.jpg"

function HomeScreen() {
  return (
    <>
      <body className="body">
        {/* Row 1 */}
        <div className="card flex-row flex-space-between">
          <img src={image1} className="img-home-1"/>
          <div>
            <div className="card-title">Bài kiểm tra định hướng ngành nghề</div>
            <div className="card-content">Bài kiểm tra định hướng ngành nghề BKareer bao gồm 2 phần: Bài trắc nghiệm tính cách MBTI và Bài trắc nghiệm khám phá năng lực nghề nghiệp. Sau khi hoàn thành cả 2 phần trên, bạn sẽ khám phá được những điểm nổi trội của mình và nhận được gợi ý các thông tin ngành nghề - nghề nghiệp bạn nên ưu tiên tìm hiểu.</div>
            <Link className="secondary-outline-btn" to="/majorTest">Kiểm tra ngay</Link>
          </div>
        </div>

        {/* Divide Cols*/}
        <div className="card-margin-top flex-row card-group-container">
          {/* Left Col */}
          <div className="card-left card-margin-right flex-col card-group-col">
            {/* Ikigai Card */}
            <div className="card flex-row flex-space-between flex-items-center">
              <div className="width-45 flex-col flex-self-start">
                <div className="card-title">Ikigai</div>
                <div className="card-content">Ikigai là một khái niệm sống gắn liền với niềm đam mê, mục tiêu, giá trị và sự hài lòng. Đây cũng chính là bí quyết sống trường thọ và hạnh phúc của người Nhật Bản.</div>
                <Link className="secondary-outline-btn" to="/ikigai">Tìm hiểu thêm</Link>
              </div>
              <img src={image2} className="img-home-2"/>
            </div>

            {/* 4 Cards */}
            <div className="card-margin-top flex-row flex-space-between flex-items-center card-group-container">
              <div className="card width-fit-content card-group-ele">
                <div className="card-title">Trắc nghiệm tính cách MBTI</div>
                <div className="card-content">Trắc nghiệm tính cách MBTI (Myers-Briggs Type Indicator) là một phương pháp sử dụng hàng loạt các câu hỏi trắc nghiệm để phân tích tính cách con người.</div>
                <div className="margin-bottom-2rem"><Link className="secondary-outline-btn" to="/mbtiDetail">Tìm hiểu thêm</Link></div>
              </div>

              <div className="card width-fit-content card-group-ele">
                <div className="card-title">Khám phá năng lực nghề nghiệp</div>
                <div className="card-content">Bài trắc nghiệm khám phá năng lực nghề nghiệp – Career Clusters Interest Survey được Ivy Global School xây dựng dựa trên tư liệu của tổ chức Advance CTE (Mỹ).</div>
                <div className="margin-bottom-2rem"><Link className="secondary-outline-btn" to="/ccDetail">Tìm hiểu thêm</Link></div>
              </div>
            </div>

            <div className="card-margin-top flex-row flex-space-between flex-items-center card-group-container">
              <div className="card width-fit-content card-group-ele">
                <div className="card-title"><Link to="/" className="card-title text-decor-none">Trắc nghiệm IQ</Link></div>
                <div className="card-content">Bài test IQ gồm một loạt các câu hỏi trắc nghiệm được thiết kế nhằm mục đích đánh giá khả năng tư duy của não bộ. Đây là phương pháp đo lường chỉ số IQ chính xác và phổ biến nhất hiện nay.</div>
                <div className="margin-bottom-2rem"><Link className="secondary-outline-btn" to="/iq">Tìm hiểu thêm</Link></div>
              </div>

              <div className="card width-fit-content card-group-ele">
                <div className="card-title"><Link to="/" className="card-title text-decor-none">Trắc nghiệm EQ</Link></div>
                <div className="card-content">Đa số các dạng bài kiểm tra EQ hiện nay đều là bộ câu hỏi dựa trên hai dạng mô hình cảm xúc là: Mô hình cảm xúc năng lực và Mô hình cảm xúc đặc điểm, hướng đến đo lường và đánh giá trí tuệ cảm xúc.</div>
                <div className="margin-bottom-2rem"><Link className="secondary-outline-btn" to="/eq">Tìm hiểu thêm</Link></div>
              </div>
            </div>
          </div>

          {/* Right Col */}
          <div className="card-right card-group-col">
            <div className="card">
              <div className="card-title">Weighted Sum</div>
              <div className="card-content">Fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem sed euismod placerat. Vivamus porttitor et magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper lorem ipsum.</div>
              <div className="margin-bottom-2rem"><Link className="secondary-outline-btn" to="/weightedSum">Tìm hiểu thêm</Link></div>
            </div>

            <div className="card card-margin-top">
              <div className="card-title">VIKOR</div>
              <div className="card-content">Fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem sed euismod placerat. Vivamus porttitor et magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper lorem ipsum.</div>
              <div className="margin-bottom-2rem"><Link className="secondary-outline-btn" to="/vikor">Tìm hiểu thêm</Link></div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default HomeScreen;
