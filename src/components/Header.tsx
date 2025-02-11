import quizImg from "/useQuiz.svg";

function Header() {
  return (
    <header className='app-header'>
      <img src={quizImg} alt='quiz logo' />
      <h1>React, Answer, Score!</h1>
    </header>
  );
}

export default Header;
