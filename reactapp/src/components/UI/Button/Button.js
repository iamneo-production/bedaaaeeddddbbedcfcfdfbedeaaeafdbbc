import '../../Question.css';
const Button = (props) => {

    if(props.clk){
        return <button onClick={()=>props.clk(props.par)} disabled={props.dis}>{props.children}</button>
    }
    // console.log(props.children);
    return <button className={props.cls}>{props.children}</button>
}
export default Button;