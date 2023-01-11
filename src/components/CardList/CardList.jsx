import React from 'react';
import CardItem from "../CardItem/CardItem";

const CardList = ({title, dataCards, remove,}) => {
    const title_ = dataCards.length>0
        ? title
        : "Карты не найдены"
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title_}</h1>
            {dataCards.map((card, index) =>
                <CardItem index={index+1}
                          card={card}
                          key={card.id}
                          remove={remove}
                />
            )}
        </div>
    );
};

export default CardList;