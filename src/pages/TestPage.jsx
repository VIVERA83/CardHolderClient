// import MyButton from "../components/UI/button/MyButton";
// import MyInput from "../components/UI/input/MyInput";
// import CreateCardForm from "../components/Forms/CreateCardForm";
// import CardItem from "../components/CardItem/CardItem";
// import MySelect from "../components/UI/select/MySelect";
// import MyInput from "../components/UI/input/MyInput";
import React, {useMemo, useState} from "react";
import CardForm from "../components/UI/form/CardForm";
import CardList from "../components/CardList/CardList";
import MyNavBar from "../components/elements/MyNavBar";
import CardsFilter from "../components/CardsFilter";


const TestPage = () => {
    const [filter, setFilter] = useState(
        {querySort: "", querySearch: ""}
    )
    const selectedSortList = [
        {
            name: "Сортировка по серии карты",
            value: "series"
        },
        {
            name: "Сортировка по номеру карты",
            value: "number"
        },
    ]
    const [dataCards, setDataCards] = useState([
        {
            id: 1,
            series: 111,
            number: 2,
            create_data: "2022-12-21",
            expire_date: "2022-12-21",
            status: "not_active"
        },
        {
            id: 5,
            series: 122253,
            number: 1,
            create_data: "2022-12-21",
            expire_date: "2022-12-21",
            status: "not_active"
        },
        {
            id: 2,
            series: 125333,
            number: 13,
            create_data: "2022-12-21",
            expire_date: "2022-12-21",
            status: "not_active"
        },
    ])


    // const sortedDataCards = getSortedCards()
    const sortedDataCards = useMemo(() => {
        console.log("Отработала функция сортировки", filter.querySearch)
        if (filter.querySort) {
            return [...dataCards].sort((a, b) => a[filter.querySort] - b[filter.querySort])
        }
        return dataCards
    }, [filter, dataCards])

    const sortedAndSearchedDataCards = useMemo(() => {
        return sortedDataCards.filter(card => card.number.toString().includes(filter.querySearch))
    }, [filter, sortedDataCards])

    const createCard = (newCard) => {
        setDataCards([...dataCards, newCard])
    }
    const remove = (card) => {
        console.log("remove", card.id)
        setDataCards(dataCards.filter(c => c.id !== card.id))
    }

    return (
        <div>
            <MyNavBar/>
            <header className="header">
                <div className="overlay"></div>
                <div className="container"></div>
            </header>
            <div className="description">
                <CardForm createCard={createCard}/>
                <CardsFilter filter={filter}
                             setFilter={setFilter}
                             selectedSortList={selectedSortList}
                />
                {/*<hr style={{margin: "1em", color: "red", border: ".1em solid red"}}></hr>*/}
                {/*<MyInput style={{margin: "1em 0"}}*/}
                {/*         value={searchQuery}*/}
                {/*         onChange={event => setSearchQuery(event.target.value)}*/}
                {/*         placeholder="поиск номеру"/>*/}


                {/*<MySelect value={selectedSort}*/}
                {/*          defaultValue="Сортировка"*/}
                {/*          onChange={sortCards}*/}
                {/*          options={sortList}/>*/}

                <CardList title={"Список карт"}
                          dataCards={sortedAndSearchedDataCards}
                          remove={remove}/>

            </div>
            {/*</header>*/}
        </div>
    )
}
export default TestPage

