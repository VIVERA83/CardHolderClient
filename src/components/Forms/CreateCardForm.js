import React, {useState} from "react";
import NumberField from "../elements/NumberField";
// import "../../styles/CreateCardForm.css"

class CreateCardForm extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        series: 1,
        seriesError: "",
        count: 1,
        countError: "",
        cards: []
    }


    handleClick = async () => {
        const requestData = {
            "series": 1253
        }
        const response = await fetch(`http://127.0.0.1:8000/search/`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(requestData)
        })
        const cards = await response.json()
        // console.log("cards.toString()")
        // this.setState({cards: cards})
        // console.log(this.cards)
    }

    onSeriesChange = event => this.setState({series: event.target.value})
    onCountChange = event => this.setState({count: event.target.value})

    onSeriesBlur = () => {
        const {series} = this.state
        const seriesError = this.validateSeries(series)
        return this.setState({seriesError})
    }
    onCountBluer = () => {
        const {count} = this.state
        const countError = this.validateCount(count)
        return this.setState({countError})
    }
    validateSeries = series => {
        return !(series > 0 && series < 10000) ? "Серия должна быть не менее 1 и не более 10000" : ""
    }

    validateCount = count => {
        return !(count > 0 && count < 10) ? "Количество не может быть менее 1 и не более 10" : ""
    }

    render() {
        const {seriesError, countError} = this.state
        return (
            <form className="contact-form" action={""}>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h1>Генерация карт</h1>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 right">
                        <NumberField name="series"
                                     onChange={this.onSeriesChange}
                                     onBlur={this.onSeriesBlur}
                                     placeholder="Серия"
                                     error={seriesError}/>
                        <NumberField name="count"
                                     onChange={this.onCountChange}
                                     onBlur={this.onCountBluer}
                                     placeholder="Количество"
                                     error={countError}/>
                        <div className="form-group">
                            <select className="form-control form-control-lg">
                                <option value="year">year</option>
                                <option value="six_months">six_months</option>
                                <option value="month">month</option>
                            </select>

                        </div>
                        <input type="submit"
                               onClick={this.handleClick}
                               className="btn-submit btn btn-secondary btn-block b"
                               value="Генерировать"
                               name=""/>
                    </div>
                </div>

            </form>

        )
    }
}

export default CreateCardForm
