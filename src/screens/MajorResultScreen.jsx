import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Dropdown from "react-dropdown";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Result from "../database/Result.js";
import { BounceLoader } from "react-spinners";
import { Alert } from "bootstrap";

function MajorResult() {
  const mbtiOptions = [
    "ESTP - Người thực thi",
    "ESFP - Người nghệ sĩ",
    "ENFP - Người truyền cảm hứng",
    "ENTP - Người nhìn xa",
    "ESTJ - Người giám hộ",
    "ESFJ - Người quan tâm",
    "ENFJ - Người cho đi",
    "ENTJ - Người lãnh đạo",
    "ISTJ - Người trách nhiệm",
    "ISFJ - Người nuôi dưỡng",
    "INFJ - Nhà tư vấn",
    "INTJ - Nhà khoa học",
    "ISTP - Nhà kỹ thuật",
    "ISFP - Người nghệ sĩ",
    "INFP - Người lý tưởng hóa",
    "INTP - Nhà triết học",
  ];

  const careerOptions = [
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
    "Luật, An toàn công cộng,Sửa chữa và bảo mật",
    "Kỹ thuật",
    "Thương mại",
    "Khoa học",
    "Phân phối và hậu cần",
  ];

  const calcOptions = [
    {
      id: "1",
      title: "Weighted Sum",
    },
    {
      id: "2",
      title: "VIKOR",
    },
  ];

  const onSelected = (answerId) => {
    var radioInput = document.getElementById(answerId);
    radioInput.checked = true;
  };

  const { mbtiResult } = useParams();
  const { ccResult } = useParams();

  const [mbtiValue, setMbtiValue] = useState(mbtiResult || "");
  const [careerValue, setCareerValue] = useState(ccResult || "");
  const [calcMethod, setCalcMethod] = useState("");
  const [result, setResult] = useState([]);
  const [recom, setRecom] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const mbtiResult = Result.getMbti(); // Lấy giá trị MBTI từ result.js
    if (mbtiResult) {
      setMbtiValue(mbtiResult);
    }
    const ccResult = Result.getCc(); // Lấy giá trị CC từ result.js
    if (ccResult) {
      setCareerValue(ccResult);
    }
  }, []);

  const handleMbtiChange = (selectedOption) => {
    // Lấy 4 chữ cái đầu tiên từ giá trị option
    const mbti = selectedOption.value.substring(0, 4);
    setMbtiValue(mbti);
  };

  const handleCareerChange = (selectedOption) => {
    setCareerValue(selectedOption.value);
  };

  const VikorColumns = [
    { name: "Jobs", selector: (row) => row.Jobs },
    { name: "Salary_AVG_VND", selector: (row) => row.Salary_AVG_VND },
    {
      name: "Number (thousands)",
      selector: (row) => row["Number(thoundsand)"],
    },
    { name: "s_mbti", selector: (row) => row.s_mbti },
    { name: "s_cc", selector: (row) => row.s_major },
    { name: "s_salary ", selector: (row) => row.s_salary },
    { name: "s_job", selector: (row) => row.s_job },
    { name: "s_total", selector: (row) => row.s_total },
    { name: "r_total", selector: (row) => row.r_total },
    { name: "q_total", selector: (row) => row.q_total },
  ];

  const WeightsumColumns = [
    { name: "Jobs", selector: (row) => row.Jobs },
    { name: "Salary_AVG_VND", selector: (row) => row.Salary_AVG_VND },
    {
      name: "Number(thoundsand)",
      selector: (row) => row["Number(thoundsand)"],
    },
    { name: "mbti_score", selector: (row) => row.mbti_score },
    { name: "major_score", selector: (row) => row.major_score },
    { name: "ikigai_score", selector: (row) => row.ikigai_score },
  ];

  const handleCalcMethodChange = (method) => {
    setCalcMethod(method);
  };

  const handleViewResult = () => {
    window.scrollTo({
      top: 530,
      behavior: "smooth", // for smooth scrolling
    });
    setLoading(true);
    setTimeout(() => {
      if (calcMethod === "Weighted Sum") {
        axios
          .get(
            `https://ikigaihcmutv2-332ubqslia-as.a.run.app/cal_weight_sum?MBTI=${mbtiValue}&CC=${careerValue}`
          )
          .then((response) => {
            const data = response.data;
            setResult(data.result);
            setRecom(data.recom);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      } else if (calcMethod === "VIKOR") {
        axios
          .get(
            `https://ikigaihcmutv2-332ubqslia-as.a.run.app/cal_vikor?MBTI=${mbtiValue}&CC=${careerValue}`
          )
          .then((response) => {
            const data = response.data;
            setResult(data.result);
            setRecom(data.recom);
            setLoading(false);
          })
          .catch((error) => {
            Alert("Error fetching data:", error);
          });
      }
    }, 1000);
  };
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#04BCFC",
  };
  return (
    <body className="body screen-block">
      <div className="screen-title">Kết quả MBTI và Nhóm ngành yêu thích</div>
      <div className="flex-row flex-items-start">
        <div className="font-18 semi-bold-txt left-res-block">
          Nhóm tính cách MBTI:
        </div>
        <div className="flex-row flex-space-between right-res-block">
          <Dropdown
            className="dropdown dropdown-block"
            options={mbtiOptions}
            value={mbtiValue}
            onChange={handleMbtiChange}
            placeholder="Chọn nhóm tính cách MBTI"
          />
          <Link
            className="primary-outline-btn width-fit-content font-18 margin-left-10 flex-self-start"
            to="/mbti"
          >
            Kiểm tra ngay
          </Link>
        </div>
      </div>

      <div className="margin-top-1rem flex-row flex-items-start">
        <div className="font-18 semi-bold-txt left-res-block">
          Khám phá năng lực nghề nghiệp:
        </div>
        <div className="flex-row flex-space-between right-res-block">
          <Dropdown
            className="dropdown dropdown-block"
            options={careerOptions}
            value={careerValue}
            onChange={handleCareerChange}
            placeholder="Chọn nhóm ngành phù hợp"
          />
          <Link
            className="primary-outline-btn font-18 margin-left-10 flex-self-start"
            to="/career"
          >
            Kiểm tra ngay
          </Link>
        </div>
      </div>

      <div className="margin-top-1rem flex-row flex-items-center">
        <div className="font-18 semi-bold-txt left-res-block">
          Chọn phương pháp tính:
        </div>
        <div className="right-res-block">
          <input
            type="radio"
            name="calcMethod"
            id={calcOptions[0].id}
            className="input"
            onClick={() => {
              handleCalcMethodChange(calcOptions[0].title);
              onSelected(calcOptions[0].id);
            }}
          />
          <label
            htmlFor="Weighted Sum"
            className="font-18 margin-right-2rem"
            onClick={() => {
              handleCalcMethodChange(calcOptions[0].title);
              onSelected(calcOptions[0].id);
            }}
          >
            {calcOptions[0].title}
          </label>

          <input
            type="radio"
            name="calcMethod"
            id={calcOptions[1].id}
            className="input margin-left-20"
            onClick={() => {
              handleCalcMethodChange(calcOptions[1].title);
              onSelected(calcOptions[1].id);
            }}
          />
          <label
            htmlFor="VIKOR"
            className="font-18"
            onClick={() => {
              handleCalcMethodChange(calcOptions[1].title);
              onSelected(calcOptions[1].id);
            }}
          >
            {calcOptions[1].title}
          </label>
        </div>
      </div>

      {mbtiValue == "" || careerValue == "" || calcMethod == "" ? (
        <button
          className="primary-btn disable-primary-btn font-18 align-center margin-top-2rem test"
          disabled
        >
          Gửi kết quả
        </button>
      ) : (
        <button
          className="primary-btn font-18 align-center margin-top-2rem test"
          onClick={handleViewResult}
        >
          Gửi kết quả
        </button>
      )}

      <div className="res-block">
        <BounceLoader
          loading={loading}
          size={200}
          color="#358bca"
          aria-label="Loading Spinner"
          data-testid="loader"
          cssOverride={override}
        />
        {recom.length > 0 && loading === false && (
          <>
            <div className="rcm-card-container">
              <Slide>
                {recom.map((item) => (
                  <div className="rcm-card">
                    <h1 className="screen-title margin-top-0">{item.Jobs}</h1>
                    <p className="rcm-card-content">{item.Description}</p>
                    <p className="rcm-card-content">{item.Major}</p>
                  </div>
                ))}
              </Slide>
            </div>
          </>
        )}
      </div>

      <div className="res-block">
        {result.length > 0 ? (
          <div className="screen-title margin-top-2rem">Bảng kết quả </div>
        ) : (
          <></>
        )}

        {result.length > 0 &&
          calcMethod === "Weighted Sum" &&
          loading === false && (
            <DataTable
              title="Weighted Sum"
              columns={WeightsumColumns}
              data={result}
              striped
            />
          )}

        {result.length > 0 && calcMethod === "VIKOR" && loading === false && (
          <DataTable
            title="VIKOR"
            columns={VikorColumns}
            data={result}
            striped
          />
        )}
      </div>
    </body>
  );
}

export default MajorResult;
