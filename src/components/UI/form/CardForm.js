import React, {useState} from 'react';
import MyInput from "../input/MyInput";
import MyButton from "../button/MyButton";
import MySelect from "../select/MySelect";
import {validateCount, validateSeries} from "./utils/customValidate";
import {durations} from "./utils/data";


const CardForm = ({createCard}) => {
        const [series, setSeries] = useState("")
        const [count, setCount] = useState("")

        const [seriesError, setSeriesError] = useState("")
        const [countError, setCountError] = useState("")


        const onSeriesChange = (event) => setSeries(event.target.value)

        const onCountChange = (event) => setCount(event.target.value)

        const addCards = (event) => {
            event.preventDefault();
            let newCard = {
                id: Date.now(),
                series: series,
                number: count,
                create_data: Date.now(),
                expire_date: Date.now(),
                status: "not_active",
            }
            setCountError(validateCount(count))
            setSeriesError(validateSeries(series))
            if (Boolean(count) || Boolean(series)) {
                createCard(newCard)
            }

            setCount("")
            setSeries("")


        }
        return (
            <form className={"card-form"}>
                <div className={"row"}>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h1>Генерация карт</h1>

                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 right">
                        <MyInput
                            type="number"
                            value={series}
                            onChange={onSeriesChange}
                            placeholder="Серия"
                        />
                        <span>{seriesError}</span>
                        <MyInput
                            type="number"
                            value={count}
                            onChange={onCountChange}
                            placeholder="Количество"
                        />
                        <span>{countError}</span>
                        <MySelect options={durations}
                                  defaultValue={"Срок действия"}
                        />
                        <MyButton onClick={addCards}
                        >
                            Создать
                        </MyButton>

                    </div>
                </div>
            </form>
        )
            ;
    }
;

export default CardForm;