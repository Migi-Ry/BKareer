const questions = [
  {
    content: "Câu 1: Tại một buổi tiệc, bạn sẽ:",
    answers: [
      {
        answerId: "1",
        answerContent: "A. Giao tiếp với nhiều người, kể cả người lạ",
      },
      {
        answerId: "2",
        answerContent: "B. Chỉ giao tiếp với một số ít người mà bạn đã quen",
      },
    ],
  },
  {
    content: "Câu 2: Bạn thấy mình là người nghiêng về kiểu nào nhiều hơn?",
    answers: [
      { answerId: "3", answerContent: "A. Thực tế" },
      { answerId: "4", answerContent: "B. Sáng tạo" },
    ],
  },
  {
    content: "Câu 3: Bạn nghĩ tình huống nào tồi tệ hơn?",
    answers: [
      {
        answerId: "5",
        answerContent: "A. Đầu óc của bạn cứ 'bay bổng trên mây'",
      },
      {
        answerId: "6",
        answerContent:
          "B. Cuộc sống của bạn thật nhàm chán và không bao giờ thay đổi",
      },
    ],
  },
  {
    content: "Câu 4: Bạn sẽ bị ấn tượng hơn với",
    answers: [
      { answerId: "7", answerContent: "A. Các nguyên tắc" },
      { answerId: "8", answerContent: "B. Những cảm xúc" },
    ],
  },
  {
    content: "Câu 5: Khi quyết định việc gì đó, bạn thường hay dựa vào:",
    answers: [
      { answerId: "9", answerContent: "A. Sự thuyết phục" },
      { answerId: "10", answerContent: "B. Sự đồng cảm" },
    ],
  },
  {
    content: "Câu 6: Bạn thích làm việc theo kiểu nào nhiều hơn?",
    answers: [
      { answerId: "11", answerContent: "A. Theo đúng thời hạn" },
      { answerId: "12", answerContent: "B. Tùy hứng" },
    ],
  },
  {
    content: "Câu 7: Bạn có khuynh hướng đưa ra các lựa chọn",
    answers: [
      { answerId: "13", answerContent: "A. Rất cẩn thận" },
      { answerId: "14", answerContent: "B. Phần nào theo cảm nhận" },
    ],
  },
  {
    content: "Câu 8: Tại các bữa tiệc, bạn thường:",
    answers: [
      {
        answerId: "15",
        answerContent: "A. Ở lại tới cùng và cảm thấy càng lúc càng hào hứng",
      },
      { answerId: "16", answerContent: "B. Ra về sớm vì cảm thấy mệt mỏi dần" },
    ],
  },
  {
    content: "Câu 9: Kiểu người nào sẽ thu hút bạn hơn?",
    answers: [
      { answerId: "17", answerContent: "A. Người thực tế và có lý lẽ" },
      { answerId: "18", answerContent: "B. Người giàu trí tưởng tượng" },
    ],
  },
  {
    content: "Câu 10: Điều nào khiến bạn thấy thích thú hơn?",
    answers: [
      { answerId: "19", answerContent: "A. Những điều thực tế" },
      { answerId: "20", answerContent: "B. Những ý tưởng khả thi" },
    ],
  },
  {
    content:
      "Câu 11: Khi đánh giá hoặc phán xét người khác, bạn thường hay dựa vào điều gì?",
    answers: [
      { answerId: "21", answerContent: "A. Luật lệ và nguyên tắc" },
      { answerId: "22", answerContent: "B. Hoàn cảnh" },
    ],
  },
  {
    content:
      "Câu 12: Khi tiếp cận, tiếp xúc người khác, bạn nghiêng về hướng nào hơn?",
    answers: [
      { answerId: "23", answerContent: "A. Tiếp cận theo hướng khách quan" },
      {
        answerId: "24",
        answerContent: "B. Tiếp cận theo hướng sử dụng trải nghiệm cá nhân",
      },
    ],
  },
  {
    content: "Câu 13: Phong cách của bạn nghiêng về hướng nào hơn?",
    answers: [
      { answerId: "25", answerContent: "A. Đúng giờ, nghiêm túc" },
      { answerId: "26", answerContent: "B. Nhàn nhã, thoải mái" },
    ],
  },
  {
    content: "Câu 14: Bạn cảm thấy không thoải mái khi có những việc:",
    answers: [
      { answerId: "27", answerContent: "A. Chưa hoàn thiện" },
      { answerId: "28", answerContent: "B. Đã quá hoàn thiện" },
    ],
  },
  {
    content: "Câu 15: Trong các mối quan hệ xã hội, bạn thường",
    answers: [
      {
        answerId: "29",
        answerContent:
          "A. Luôn nắm bắt kịp thời thông tin về các vấn đề của mọi người",
      },
      {
        answerId: "30",
        answerContent: "B. Thường biết thông tin sau những người khác",
      },
    ],
  },
  {
    content: "Câu 16: Với các công việc thông thường, bạn nghiêng về cách:",
    answers: [
      { answerId: "31", answerContent: "A. Làm theo cách thông thường" },
      { answerId: "32", answerContent: "B. Làm theo cách của riêng mình" },
    ],
  },
  {
    content: "Câu 17: Các nhà văn nên:",
    answers: [
      {
        answerId: "33",
        answerContent:
          "A. Viết những gì họ nghĩ và chân thật với những gì mình viết",
      },
      {
        answerId: "34",
        answerContent: "B. Diễn đạt sự việc bằng cách so sánh hay liên tưởng",
      },
    ],
  },
  {
    content: "Câu 18: Điều gì lôi cuốn bạn hơn?",
    answers: [
      {
        answerId: "35",
        answerContent: "A. Tính nhất quán của tư duy, suy nghĩ",
      },
      {
        answerId: "36",
        answerContent: "B. Sự hòa hợp trong các mối quan hệ của con người",
      },
    ],
  },
  {
    content: "Câu 19: Bạn cảm thấy thoải mái hơn khi đưa ra:",
    answers: [
      {
        answerId: "37",
        answerContent: "A. Những đánh giá, nhận xét một cách logic",
      },
      {
        answerId: "38",
        answerContent: "B. Những đánh giá, nhận xét một cách có ý nghĩa",
      },
    ],
  },
  {
    content: "Câu 20: Bạn thích những điều:",
    answers: [
      { answerId: "39", answerContent: "A. Đã được sắp xếp, quyết định trước" },
      {
        answerId: "40",
        answerContent: "B. Chưa xác định, chưa được quyết định",
      },
    ],
  },
  {
    content: "Câu 21: Bạn tự thấy mình:",
    answers: [
      { answerId: "41", answerContent: "A. Nghiêm túc, quyết đoán" },
      { answerId: "42", answerContent: "B. Dễ gần, thoải mái" },
    ],
  },
  {
    content: "Câu 22: Khi nói chuyện điện thoại, bạn:",
    answers: [
      { answerId: "43", answerContent: "A. Cứ gọi bình thường" },
      { answerId: "44", answerContent: "B. Chuẩn bị trước những điều sẽ nói" },
    ],
  },
  {
    content: "Câu 23: Những sự kiện trong thực tế",
    answers: [
      {
        answerId: "45",
        answerContent: "A. Bản thân nó giải thích cho chính nó",
      },
      {
        answerId: "46",
        answerContent:
          "B. Nó là bằng chứng giải thích cho các quy tắc, quy luật",
      },
    ],
  },
  {
    content: "Câu 24: Những người có tầm nhìn xa/người lo xa.",
    answers: [
      {
        answerId: "47",
        answerContent: "A. Thường gây khó chịu cho người khác",
      },
      { answerId: "48", answerContent: "B. Khá thú vị" },
    ],
  },
  {
    content: "Câu 25: Bạn thường là người",
    answers: [
      { answerId: "49", answerContent: "A. Cái đầu lạnh" },
      { answerId: "50", answerContent: "B. Trái tim nóng" },
    ],
  },
  {
    content: "Câu 26: Điều nào thì tồi tệ hơn?",
    answers: [
      { answerId: "51", answerContent: "A. Không công bằng" },
      { answerId: "52", answerContent: "B. Tàn nhẫn" },
    ],
  },
  {
    content: "Câu 27: Các sự kiện nên xảy ra theo hướng:",
    answers: [
      {
        answerId: "53",
        answerContent: "A. Được lựa chọn và cân nhắc kỹ lưỡng",
      },
      { answerId: "54", answerContent: "B. Ngẫu nhiên và tự nhiên" },
    ],
  },
  {
    content: "Câu 28: Bạn cảm thấy thoải mái hơn khi",
    answers: [
      { answerId: "55", answerContent: "A. Đã mua một thứ gì đó" },
      { answerId: "56", answerContent: "B. Đang lựa chọn để mua" },
    ],
  },
  {
    content: "Câu 29: Trong công ty, bạn là người:",
    answers: [
      { answerId: "57", answerContent: "A. Khởi xướng các câu chuyện" },
      {
        answerId: "58",
        answerContent: "B. Đợi người khác bắt chuyện với mình",
      },
    ],
  },
  {
    content:
      "Câu 30: Đối với những quy ước, quy tắc thông thường trong xã hội, bạn:",
    answers: [
      { answerId: "59", answerContent: "A. Ít khi nghi ngờ những điều này" },
      {
        answerId: "60",
        answerContent: "B. Thường xem xét lại tính đúng đắn của những điều đó",
      },
    ],
  },
  {
    content: "Câu 31: Trẻ em thường:",
    answers: [
      { answerId: "61", answerContent: "A. Chưa cố gắng đủ" },
      { answerId: "62", answerContent: "B. Chưa vui chơi đủ" },
    ],
  },
  {
    content: "Câu 32: Khi đưa ra các quyết định, bạn sẽ thấy thoải mái hơn với",
    answers: [
      { answerId: "63", answerContent: "A. Các tiêu chuẩn" },
      { answerId: "64", answerContent: "B. Cảm xúc, cảm nhận" },
    ],
  },
  {
    content: "Câu 33: Bạn nghiêng về tính cách nào hơn?",
    answers: [
      { answerId: "65", answerContent: "A. Cứng rắn" },
      { answerId: "66", answerContent: "B. Nhẹ nhàng" },
    ],
  },
  {
    content: "Câu 34: Theo bạn, khả năng nào đáng khâm phục hơn?",
    answers: [
      {
        answerId: "67",
        answerContent: "A. Khả năng tổ chức và làm việc có phương pháp",
      },
      {
        answerId: "68",
        answerContent: "B. Khả năng thích ứng và xoay xở trước mọi tình huống",
      },
    ],
  },
  {
    content: "Câu 35: Bạn đề cao tố chất nào hơn?",
    answers: [
      { answerId: "69", answerContent: "A. Sự chắc chắn" },
      { answerId: "70", answerContent: "B. Sự cởi mở" },
    ],
  },
  {
    content:
      "Câu 36: Khi phải tương tác với người khác ở các tình huống và vấn đề mới lạ, không thường gặp, bạn thường:",
    answers: [
      { answerId: "71", answerContent: "A. Thấy phấn chấn và hào hứng" },
      { answerId: "72", answerContent: "B. Cảm thấy mệt mỏi" },
    ],
  },
  {
    content: "Câu 37: Thường thì bạn là:",
    answers: [
      { answerId: "73", answerContent: "A. Người thực tế" },
      {
        answerId: "74",
        answerContent: "B. Người có khả năng tưởng tượng phong phú",
      },
    ],
  },
  {
    content: "Câu 38: Bạn thường có xu hướng:",
    answers: [
      {
        answerId: "75",
        answerContent: "A. Xem người khác có thể làm được việc gì hữu ích",
      },
      {
        answerId: "76",
        answerContent: "B. Xem người khác sẽ nghĩ và cảm nhận như thế nào",
      },
    ],
  },
  {
    content: "Câu 39: Bạn cảm thấy thoải mái hơn khi:",
    answers: [
      {
        answerId: "77",
        answerContent: "A. Thảo luận một vấn đề kĩ lưỡng, triệt để",
      },
      {
        answerId: "78",
        answerContent: "B. Đạt được thỏa thuận, sự nhất trí về vấn đề",
      },
    ],
  },
  {
    content: "Câu 40: Cái đầu hay trái tim chi phối bạn nhiều hơn",
    answers: [
      { answerId: "79", answerContent: "A. Cái đầu" },
      { answerId: "80", answerContent: "B. Trái tim" },
    ],
  },
  {
    content:
      "Câu 41: Bạn cảm thấy thoải mái hơn khi làm các công việc theo dạng",
    answers: [
      {
        answerId: "81",
        answerContent: "A. Được giao trọn gói, làm xong hết rồi bàn giao",
      },
      {
        answerId: "82",
        answerContent: "B. Công việc làm hàng ngày, theo lịch",
      },
    ],
  },
  {
    content: "Câu 42: Bạn có xu hướng tìm kiếm những điều",
    answers: [
      { answerId: "83", answerContent: "A. Theo trật tự, thứ tự" },
      { answerId: "84", answerContent: "B. Ngẫu nhiên" },
    ],
  },
  {
    content: "Câu 43: Bạn thích kiểu nào hơn?",
    answers: [
      { answerId: "85", answerContent: "A. Nhiều bạn bè ở mức độ xã giao" },
      { answerId: "86", answerContent: "B. Một vài người bạn thân" },
    ],
  },
  {
    content: "Câu 44: Bạn thường dựa vào:",
    answers: [
      { answerId: "87", answerContent: "A. Sự kiện, thông tin thực tế" },
      { answerId: "88", answerContent: "B. Nguyên lý, nguyên tắc" },
    ],
  },
  {
    content: "Câu 45: Bạn hứng thú với việc gì hơn?",
    answers: [
      { answerId: "89", answerContent: "A. Sản xuất và phân phối" },
      { answerId: "90", answerContent: "B. Thiết kế và nghiên cứu" },
    ],
  },
  {
    content: "Câu 46: Lời khen nào giá trị hơn?",
    answers: [
      {
        answerId: "91",
        answerContent: "A. “Đó là một người có suy nghĩ rất logic”",
      },
      {
        answerId: "92",
        answerContent: "B. “Đó là một người rất tình cảm, tinh tế”",
      },
    ],
  },
  {
    content: "Câu 47: Bạn thích mình có tố chất nào hơn?",
    answers: [
      { answerId: "93", answerContent: "A. Kiên định, vững vàng" },
      { answerId: "94", answerContent: "B. Toàn tâm, cống hiến" },
    ],
  },
  {
    content: "Câu 48: Bạn thường thích điều nào hơn?",
    answers: [
      {
        answerId: "95",
        answerContent: "A. Một tuyên bố cuối cùng, không thay đổi",
      },
      { answerId: "96", answerContent: "B. Một tuyên bố dự kiến, ban đầu" },
    ],
  },
  {
    content: "Câu 49: Bạn thấy thoải mái hơn vào lúc:",
    answers: [
      { answerId: "97", answerContent: "A. Trước khi đưa ra quyết định" },
      { answerId: "98", answerContent: "B. Sau khi đưa ra quyết định" },
    ],
  },
  {
    content: "Câu 50: Bạn có thấy mình:",
    answers: [
      {
        answerId: "99",
        answerContent:
          "A. Dễ dàng bắt chuyện và kéo dài cuộc trò chuyện với người mới gặp",
      },
      {
        answerId: "100",
        answerContent: "B. Khó mà trò chuyện nhiều với những người mới quen",
      },
    ],
  },
  {
    content: "Câu 51: Bạn có xu hướng tin tưởng vào:",
    answers: [
      { answerId: "101", answerContent: "A. Kinh nghiệm của mình" },
      { answerId: "102", answerContent: "B. Linh cảm của mình" },
    ],
  },
  {
    content: "Câu 52: Bạn cho rằng mình thuộc tuýp người nào hơn?",
    answers: [
      { answerId: "103", answerContent: "A. Người thực tế" },
      { answerId: "104", answerContent: "B. Người khôn khéo" },
    ],
  },
  {
    content: "Câu 53: Theo bạn ai là người đáng được khen ngợi hơn?",
    answers: [
      { answerId: "105", answerContent: "A. Một người giàu lý trí" },
      { answerId: "106", answerContent: "B. Một người giàu cảm xúc" },
    ],
  },
  {
    content: "Câu 54: Bạn có xu hướng hành xử:",
    answers: [
      { answerId: "107", answerContent: "A. Công bằng, vô tư" },
      { answerId: "108", answerContent: "B. Thông cảm, đồng cảm" },
    ],
  },

  {
    content: "Câu 55: Bạn thích:",
    answers: [
      {
        answerId: "109",
        answerContent:
          "A. Đảm bảo rằng mọi việc được chuẩn bị, thu xếp sẵn sàng",
      },
      { answerId: "110", answerContent: "B. Để mọi việc diễn ra tự nhiên" },
    ],
  },
  {
    content: "Câu 56: Trong các mối quan hệ thì mọi việc:",
    answers: [
      {
        answerId: "111",
        answerContent: "A. Có thể thảo luận để giải quyết được",
      },
      {
        answerId: "112",
        answerContent: "B. Diễn ra ngẫu nhiên và tùy theo điều kiện hoàn cảnh",
      },
    ],
  },
  {
    content: "Câu 57: Khi chuông điện thoại reo, bạn sẽ:",
    answers: [
      { answerId: "113", answerContent: "A. Là người đầu tiên nhấc máy" },
      {
        answerId: "114",
        answerContent: "B. Hi vọng có người khác sẽ nhấc máy",
      },
    ],
  },
  {
    content: "Câu 58: Bạn đánh giá cao điều gì trong mình hơn:",
    answers: [
      {
        answerId: "115",
        answerContent: "A. Nhận thức tốt về các yếu tố thực tế",
      },
      {
        answerId: "116",
        answerContent: "B. Có trí tưởng tượng phong phú, rực rỡ",
      },
    ],
  },
  {
    content: "Câu 59: Bạn sẽ chú tâm hơn đến:",
    answers: [
      { answerId: "117", answerContent: "A. Các nguyên tắc, nguyên lý cơ bản" },
      { answerId: "118", answerContent: "B. Các ngụ ý, hàm ý, ẩn ý" },
    ],
  },
  {
    content: "Câu 60: Điều gì có vẻ sẽ là một lỗi lớn hơn?",
    answers: [
      { answerId: "119", answerContent: "A. Quá nồng nhiệt, thiết tha" },
      { answerId: "120", answerContent: "B. Quá khách quan, thờ ơ" },
    ],
  },
  {
    content: "Câu 61: Về cơ bản, bạn sẽ đánh giá mình là người thế nào?",
    answers: [
      {
        answerId: "121",
        answerContent: "A. Thiết thực, ít bị chi phối bởi tình cảm",
      },
      { answerId: "122", answerContent: "B. Từ tâm, đa cảm" },
    ],
  },
  {
    content: "Câu 62: Tình huống nào sẽ lôi cuốn bạn hơn?",
    answers: [
      { answerId: "123", answerContent: "A. Tình huống rõ ràng, có kế hoạch" },
      {
        answerId: "124",
        answerContent: "B. Tình huống không xác định, không có kế hoạch",
      },
    ],
  },
  {
    content: "Câu 63: Bạn là người có xu hướng nào hơn?",
    answers: [
      { answerId: "125", answerContent: "A. Theo thói quen" },
      { answerId: "126", answerContent: "B. Hay thay đổi" },
    ],
  },
  {
    content: "Câu 64: Bạn có xu hướng nào hơn?",
    answers: [
      { answerId: "127", answerContent: "A. Là người dễ tiếp cận" },
      { answerId: "128", answerContent: "B. Ở mức độ nào đó là người kín đáo" },
    ],
  },
  {
    content: "Câu 65: Khi viết, bạn thích:",
    answers: [
      { answerId: "129", answerContent: "A. Viết theo hướng văn chương hơn" },
      { answerId: "130", answerContent: "B. Viết theo số liệu, dữ liệu hơn" },
    ],
  },
  {
    content: "Câu 66: Đối với bạn, điều gì khó thực hiện hơn?",
    answers: [
      { answerId: "131", answerContent: "A. Hiểu và chia sẻ với người khác" },
      { answerId: "132", answerContent: "B. Điều khiển người khác" },
    ],
  },
  {
    content: "Câu 67: Bạn mong ước mình sẽ có thêm nhiều điều gì?",
    answers: [
      {
        answerId: "133",
        answerContent: "A. Lí trí và khả năng nhận xét rõ ràng",
      },
      {
        answerId: "134",
        answerContent: "B. Tình thương, lòng trắc ẩn sâu sắc",
      },
    ],
  },
  {
    content: "Câu 68: Điều gì sẽ là lỗi lớn hơn?",
    answers: [
      {
        answerId: "135",
        answerContent: "A. Hành động bừa bãi, không cân nhắc",
      },
      { answerId: "136", answerContent: "B. Hành động chỉ trích, phê phán" },
    ],
  },
  {
    content: "Câu 69: Bạn sẽ thích sự kiện nào hơn?",
    answers: [
      { answerId: "137", answerContent: "A. Sự kiện có lên kế hoạch trước" },
      { answerId: "138", answerContent: "B. Sự kiện không có kế hoạch trước" },
    ],
  },
  {
    content: "Câu 70: Bạn thường có hành động:",
    answers: [
      { answerId: "139", answerContent: "A. Cân nhắc thận trọng" },
      { answerId: "140", answerContent: "B. Tự nhiên, tự phát" },
    ],
  },
];
export default questions;