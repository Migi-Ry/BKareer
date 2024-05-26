import PhoneIcon from "../assets/phone.svg";
import EmailIcon from "../assets/email.svg";
import FacebookIcon from "../assets/facebook.svg";

function Footer() {
  return (
    <footer className="footer flex-col">
      <div className="flex-row">
        <div className="card card-left card-margin-right flex-col">
          <div className="card-title">Về chúng tôi</div>
          <button
            className="secondary-outline-btn width-fit-content"
            type="button"
            onClick={{}}
          >
            Tìm hiểu thêm
          </button>
        </div>

        <div className="card card-right flex-col">
          <div className="card-title">Thông tin liên hệ</div>
          <div className="card-content">
            <div className="flex-row flex-items-center">
              <img src={PhoneIcon} className="footer-icon" />
              <span className="footer-info">(+84) 901234567</span>
            </div>

            <div className="flex-row flex-items-center">
              <img src={EmailIcon} className="footer-icon" />
              <span className="footer-info">BKareer@gmail.com</span>
            </div>

            <div className="flex-row flex-items-center">
              <img src={FacebookIcon} className="footer-icon" />
              <span className="footer-info">facebook.com/BKareer</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-margin-top">
        <div>&copy; BKareer</div>
        <div>Đồ án chuyên ngành ngành HCMUT 2024</div>
      </div>
    </footer>
  );
}

export default Footer;
