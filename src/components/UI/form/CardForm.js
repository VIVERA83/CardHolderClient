import React, {useState, useEffect} from 'react';
import MyInput from "../input/MyInput";
import MyButton from "../button/MyButton";
import MySelect from "../select/MySelect";
import {validateFormData} from "./utils/customValidate";
import {durations} from "./utils/data";
import {createCards} from "../../../api/cardHolder";

const tempFormData = {
    series: "",
    count: "",
    duration: "month"
}
const tempFormError = {
    series: "",
    count: "",
    isError: true
}
const CardForm = ({createCard}) => {
        const [formData, setFormData] = useState(tempFormData)
        const [formError, setFormError] = useState(tempFormError)
        const [first, setFirst] = useState(false)

        useEffect(() =>
                first ?
                    validateFormData(formData, setFormError)
                    : setFirst(true)
            ,
            [formData])

        async function addCards(event) {
            event.preventDefault()
            const [data,] = await createCards({...formData})
            await createCard(data)
            setFormData(tempFormData)
            setFormError(tempFormError)
            setFirst(false)
        }

        const onChangeSeries = (event) => {
            setFormData({...formData, series: event.target.value})
            validateFormData(formData, setFormError)
        }

        const onChangeCount = (event) => {
            setFormData({...formData, count: event.target.value})
            validateFormData(formData, setFormError)

        }

        return (
            <form className={"card-form"}>
                <div className={"row"}>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h1>Генерация карт</h1>

                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 right">
                        <MyInput
                            name="series"
                            type="number"
                            value={formData.series}
                            onChange={onChangeSeries}
                            placeholder="Серия"/>
                        <span style={{color: "orchid"}}>{formError.series}</span>
                        <MyInput
                            type="number"
                            value={formData.count}
                            onChange={onChangeCount}
                            placeholder="Количество"/>
                        <span style={{color: "orchid"}}>{formError.count}</span>
                        <MySelect
                            value=""
                            defaultValue="Срок действия, по умолчанию месяц"
                            onChange={selectedDuration => setFormData({...formData, duration: selectedDuration})}
                            options={durations}/>
                        <MyButton
                            disabled={formError.isError}
                            onClick={addCards}>
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