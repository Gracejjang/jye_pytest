// 문제와 정답을 미리 정의 (임시 하드코딩)
const question = `print("Hello", "Python!")`;
const correctAnswer = `Hello Python!`;

// DOM 요소 가져오기
const questionBlock = document.getElementById("python-question");
const submitButton = document.getElementById("submit-answer");
const userAnswerInput = document.getElementById("user-answer");
const resultMessage = document.getElementById("result-message");

// 문제 표시
questionBlock.textContent = question;

// 정답 비교 함수
submitButton.addEventListener("click", () => {
  const userAnswer = userAnswerInput.value.trim();

  // 기존 결과 초기화
  resultMessage.textContent = "";
  resultMessage.className = "";

  if (userAnswer === correctAnswer) {
    resultMessage.textContent = "정답입니다! 🎉";
    resultMessage.classList.add("correct");
  } else {
    resultMessage.textContent = "틀렸어요! 다시 시도해보세요.";
    resultMessage.classList.add("incorrect");
  }
});
