import React from 'react';
import MyButton from "../UI/button/MyButton";
import moment from "moment";

function numberToStr(number) {
    return moment(number).local().format("LLL")
}

const CardItem = ({index, card, remove,}) => {
    return (
        <div className="post-cart">
            <div className="post__content">
                <strong>{index}.</strong>
                <div>
                    <strong>Серия {card.series}</strong>
                </div>
                <div>
                    <strong>Номер {card.number}</strong>
                </div>
                <div>
                    дата активации {numberToStr(card.create_data)}
                </div>
                <div>
                    срок действия {numberToStr(card.expire_date)}
                </div>
                <div>статус {card.status}
                </div>
            </div>
            <div>
                <MyButton onClick={() => remove(card)}>Удалить</MyButton>
            </div>
        </div>

    )
        ;
};

export default CardItem;