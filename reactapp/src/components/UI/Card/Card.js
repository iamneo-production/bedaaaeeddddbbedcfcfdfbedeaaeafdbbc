import Button from "../Button/Button";
import { useState } from "react";

const Card = (props) => {


    const [o1,setO1]=useState(false);
    const [o2,setO2]=useState(false);
    const [o3,setO3]=useState(false);
    const [o4,setO4]=useState(false);

    //console.log(props.que.que);

    const butClicked = (par) => {
        if(par==1){
            setO2(true);
            setO3(true);
            setO4(true);
            props.check(props.qno,props.options.option1);
        }
        else if(par==2){
            setO3(true);
            setO4(true);
            setO1(true);props.check(props.qno,props.options.option2);
        }
        else if(par==3){
            setO4(true);
            setO1(true);
            setO2(true);props.check(props.qno,props.options.option3);
        }
        else{
            setO1(true);
            setO2(true);
            setO3(true);props.check(props.qno,props.options.option4);
        }
    }


    return <>
        <h4>{props.question}</h4>
        <Button clk={butClicked} par={1} dis={o1}>{props.options.option1}</Button>
        <Button clk={butClicked} par={2} dis={o2}>{props.options.option2}</Button>
        <Button clk={butClicked} par={3} dis={o3}>{props.options.option3}</Button>
        <Button clk={butClicked} par={4} dis={o4}>{props.options.option4}</Button>
    </>

}

export default Card;