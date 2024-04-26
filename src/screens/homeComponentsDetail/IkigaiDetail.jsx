import image from "../../assets/images/ikigai-no-title.jpg"

function Ikigai() {
  return (
    <body className="body screen-block">
      <div className="screen-title">Ikigai</div>

      <img src={image} className="img-detail"/>

      <div className="detail-txt font-20 margin-top-2rem">
        Ikigai là một khái niệm có nguồn gốc từ Nhật Bản, nó xuất phát từ hai từ "iki" (cuộc sống) và "gai" (ý nghĩa, hy vọng). Ikigai có nghĩa là "ý nghĩa trong việc sống" hoặc "lý do tồn tại", là một quy tắc tư duy giúp con người tìm thấy ý nghĩa và niềm vui trong cuộc sống.
      </div>

      <div className="detail-txt font-20">
        Ikigai bao gồm 4 khía cạnh:
        <ul>
          <li><span className="semi-bold-txt">Điều bạn yêu thích (passion):</span> Đây là điểm mạnh, niềm đam mê và sự hứng thú trong công việc hoặc hoạt động mà bạn thực sự thích.</li>
          <li><span className="semi-bold-txt">Điều bạn giỏi (profession):</span> Đây là những kỹ năng, năng lực và kinh nghiệm mà bạn đã phát triển trong lĩnh vực công việc hoặc sở trường của mình.</li>
          <li><span className="semi-bold-txt">Điều mà thế giới cần (mission):</span> Đây là những việc bạn tin tưởng và cho rằng có thể đóng góp vào cộng đồng hoặc thế giới xung quanh, tạo nên giá trị cho người khác.</li>
          <li><span className="semi-bold-txt">Điều mà bạn có thể kiếm sống (vocation):</span> Đây là những việc mà bạn làm để kiếm sống và đáp ứng nhu cầu cơ bản của bản thân, gia đình.</li>
        </ul>
      </div>

      <div className="detail-txt font-20">
        Khi 4 khía cạnh này hội tụ, Ikigai sẽ đạt đến một sự cân bằng hoàn hảo giữa niềm vui, ý nghĩa và tiềm năng sáng tạo trong cuộc sống. Ikigai giúp con người tìm ra mục tiêu lớn lao trong cuộc sống và tạo động lực để vượt qua những khó khăn, thử thách.
      </div>
    </body>
  );
}

export default Ikigai;
