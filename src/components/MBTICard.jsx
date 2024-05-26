const Card = ({ Ques }) => {
  const onSelected = (answerId) => {
    var radioInput = document.getElementById(answerId);
    // Kiểm tra xem radio đã được chọn hay chưa
    // Nếu chưa được chọn, chọn nó và thực hiện các hành động khác (ví dụ: đổi màu)
    radioInput.checked = true;
    let list = document.getElementsByName(Ques.content);
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === answerId) {
        list[i].checked = true;
        let answerItem = document.getElementById(list[i].id).parentElement;
        answerItem.classList.add("selected");
      } else {
        list[i].checked = false;
        let answerItem = document.getElementById(list[i].id).parentElement;
        answerItem.classList.remove("selected");
      }
    }
  };
  return (
    <>
      <div className="question-card">
        <h1>{Ques.content}</h1>
        <div className="answer-form">
          <div
            className="answer-item"
            onClick={() => onSelected(Ques.answers[0].answerId)}
          >
            <input
              type="radio"
              name={Ques.content}
              id={Ques.answers[0].answerId}
              className="input"
              onClick={() => onSelected(Ques.answers[0].answerId)}
              key={Ques.answers[0].answerId} />
            <label htmlFor="answer1">{Ques.answers[0].answerContent}</label>
          </div>
          <div
            className="answer-item"
            onClick={() => onSelected(Ques.answers[1].answerId)}
          >
            <input
              type="radio"
              name={Ques.content}
              id={Ques.answers[1].answerId}
              className="input"
              onClick={() => onSelected(Ques.answers[1].answerId)}
              key={Ques.answers[1].answerId} />
            <label htmlFor="answer2">{Ques.answers[1].answerContent}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;