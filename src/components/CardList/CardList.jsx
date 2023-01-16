import React from 'react';
import CardItem from "../CardItem/CardItem";

const CardList = ({title, dataCards, remove, error}) => {
    const title_ = dataCards.length > 0
        ? title
        : error
            ? "Сервер временно не доступен"
            : "Карты не найдены"
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title_}</h1>
            <div className="row justify-content-center">
                {dataCards.map((card, index) =>
                    <div className={"col-5"} key={card.id}>
                        <CardItem index={index + 1}
                                  card={card}
                                  remove={remove}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardList;
