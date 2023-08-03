import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./UI/Card/Card";
import "./Question.css";

const marks=[0,0,0,0,0];

const Questions = (props) => {

    const [res,setRes]=useState(0);
    const [attempts,setAttempts]=useState(0);

    const ques = [
        {que:"Who is the father of our nation",o1:"Mahatma Gandhi",o2:"Jawaharlal Nehru",o3:"Donald Trump",o4:"Barak obama"},
        {que:"what color is are the leaves",o1:"blue",o2:"red",o3:"yellow",o4:"green"},
        {que:"what color is the sky",o1:"blue",o2:"red",o3:"yellow",o4:"green"},
        {que:"what color is the sky",o1:"blue",o2:"red",o3:"yellow",o4:"green"},
        {que:"what color is the fire",o1:"blue",o2:"red",o3:"yellow",o4:"green"}
    ];

    const checkAnsFun = (q,ans) => {
        if(q==1){
            ans=="Mahatma Gandhi"?marks[0]=1:marks[0]=0;
        }
        else if(q==2){
            ans=="green"?marks[1]=1:marks[1]=0;
        }
        else if(q==3){
            ans=="blue"?marks[2]=1:marks[2]=0;
        }
        else if(q==4){
            ans=="blue"?marks[3]=1:marks[3]=0;
        }
        else{
            ans=="red"?marks[4]=1:marks[4]=0;
        }
        setRes(()=>{
            let k=0;
            marks.map((mark)=> {
                if(mark==1){
                k+=1;
            }})
            return k;
        })
        setAttempts((prev)=>prev+1);
    }

    const SubmitTest = () => {
        props.res(res);
    }

    return <div>
                <div>
                    <div id="q1">

                        <Card key={0} qno={1} question={ques[0].que} check={checkAnsFun} options={{option1:ques[0].o1,option2:ques[0].o2,option3:ques[0].o3,option4:ques[0].o4}}></Card>

                        {/* <Question que={ques[0]} qno={1} check={checkAnsFun}></Question> */}
                    </div>
                    <div  id="q2">
                    <Card key={1} qno={2}  question={ques[1].que} check={checkAnsFun} options={{option1:ques[1].o1,option2:ques[1].o2,option3:ques[1].o3,option4:ques[1].o4}}></Card>

                        {/* <Question que={ques[1]} qno={2} check={checkAnsFun}></Question> */}
                    </div>
                </div>
            
                <div>
                    <div id="q3">
                    <Card key={2} qno={3}  question={ques[2].que} check={checkAnsFun}  options={{option1:ques[2].o1,option2:ques[2].o2,option3:ques[2].o3,option4:ques[2].o4}}></Card>

                        {/* <Question que={ques[2]} qno={3} check={checkAnsFun}></Question> */}
                    </div>
                    <div id="q4">
                    <Card key={3} qno={4}  question={ques[3].que} check={checkAnsFun} options={{option1:ques[3].o1,option2:ques[3].o2,option3:ques[3].o3,option4:ques[3].o4}}></Card>

                        {/* <Question que={ques[3]} qno={4} check={checkAnsFun}></Question> */}
                    </div>
                    <div id="q5">
                    <Card key={4} qno={5}  question={ques[4].que} check={checkAnsFun} options={{option1:ques[4].o1,option2:ques[4].o2,option3:ques[4].o3,option4:ques[4].o4}}></Card>

                        {/* <Question que={ques[4]} qno={5} check={checkAnsFun}></Question> */}
                    </div>
                </div>
                <div>
                {attempts==5 && <Link to='/results'><button onClick={SubmitTest} className="sr">Show Results</button></Link>}
                </div>
    </div>
}
export default Questions;