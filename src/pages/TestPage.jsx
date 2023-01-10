import React from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import CardForm from "../components/UI/form/CardForm";
import CreateCardForm from "../components/Forms/CreateCardForm";

const TestPage = () => {
    return (
        <div style={{margin: "1em"}}>
            <h1>Тестовая страница</h1>
            {/*<MyButton disabled>Hello World</MyButton>*/}
            {/*<MyInput value={"Hello"} disabled={true}/>*/}
            <div style={{width:"600px"}}><CardForm/></div>
            {/*<CreateCardForm/>*/}
        </div>
    )
}
export default TestPage

