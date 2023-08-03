import StartQuiz from "../../StartQuiz";
import '../../Question.css';
import { useState } from "react";

const Banner = (props) => {
    const [questionsCorrect,setQuestionCorrect]=useState(props.res);
    return <div>
        <h1 className="h1">You have answered {questionsCorrect} / 5 correctly</h1>
        <StartQuiz></StartQuiz>
    </div>;
}
export default Banner;