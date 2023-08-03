import { Link } from "react-router-dom";
import "./Question.css"
import Button from "./UI/Button/Button";
const StartQuiz = () => {
    const text="Start Quiz";
    return <Link to="/ques"><Button cls={"stq"}>{text}</Button></Link>
    //return <Link to="/ques"><button className="stq">Start Quiz</button></Link>;
}
export default StartQuiz;