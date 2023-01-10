import React from 'react';
import MyInput from "../input/MyInput";
import MyButton from "../button/MyButton";
import classes from "./CardForm.module.css"
import MySelect from "../select/MySelect";

const CardForm = () => {
    return (
        <form className={classes.cardForm}>
            <div className={"row"}>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h1>Генерация карт</h1>
                </div>
                <div className="card-form">
                    <MyInput name={"series"} placeholder={"Серия"}/>
                    <MyInput name={"count"} placeholder={"Количество"}/>
                    <MySelect/>
                    <div className="form-group">
                        <MyButton className={"btn-submit"}>Создать</MyButton>
                    </div>
                </div>
            </div>
        </form>


    )
        ;
};

export default CardForm;