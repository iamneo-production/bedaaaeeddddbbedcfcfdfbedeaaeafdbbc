import { Outlet } from "react-router";
import "./Question.css"

const QuizApp = () => {
    return <>
    <h1 className="qap">Quizz App</h1> 
    <Outlet></Outlet>
    </>;
}
export default QuizApp;