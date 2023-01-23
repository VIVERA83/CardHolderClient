import React, {useEffect, useState} from "react";
import MyNavBar from "../components/elements/MyNavBar";
import CardForm from "../components/UI/form/CardForm";
import CardList from "../components/CardList/CardList";
import CardsFilter from "../components/CardsFilter";
import MyModel from "../components/MyModel/MyModel";
import MyButton from "../components/UI/button/MyButton";
import {useSortedAndSearchedCards} from "../hooks/useCards";
import {deleteCard, getAll} from "../api/cardHolder";
import {searchList, selectedSortList, orientationList} from "../data/filterData";

const TestPage = () => {

    const [filter, setFilter] = useState({querySort: "series", querySearch: "", sortDirection: true, selectedSearch: "series"})
    const [errorServer, setErrorServer] = useState("")
    const [dataCards, setDataCards] = useState([])

    useEffect(() => {
        async function fetchCards() {
            const [data, err] = await getAll()
            setDataCards(data)
            setErrorServer(err)
        }

        fetchCards()
    }, [])

    const [visibleModal, setVisibleModal] = useState(false)

    const sortedAndSearchedDataCards = useSortedAndSearchedCards(dataCards, filter)

    async function createCard(data) {
        setDataCards([...dataCards, ...data])
        setVisibleModal(false)
    }

    async function remove(card) {
        await deleteCard(card.id)
        setDataCards(dataCards.filter(c => c.id !== card.id))
    }

    return (
        <div>
            <MyNavBar/>
            <header className="header">
                <div className="overlay"></div>
            </header>
            <div className="description">
                <MyModel visible={visibleModal}
                         setVisible={setVisibleModal}>
                    <CardForm createCard={createCard}/>
                </MyModel>
                <div className="row">
                    <div className="col">
                        <MyButton onClick={() => setVisibleModal(true)}>
                            Сгенерировать карты
                        </MyButton>
                        <hr style={{margin: "1em", color: "red", border: ".1em solid red"}}></hr>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <CardsFilter filter={filter}
                                     setFilter={setFilter}
                                     selectedSortList={selectedSortList}
                                     orientationList={orientationList}
                                     searchList={searchList}/>
                    </div>
                    <div className="row">
                        <CardList
                            title={"Список карт"}
                            dataCards={sortedAndSearchedDataCards}
                            error={errorServer}
                            remove={remove}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TestPage

