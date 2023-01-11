import React from 'react';
import MyButton from "../UI/button/MyButton";

const CardItem = ({index, card, remove, ...props}) => {
    return (
        <div className="post-cart">
            <div className="post__content">
                <strong>{index}. {card.series} {card.number}</strong>
                <div>
                    дата активации {card.create_data}
                </div>
                <div>
                    срок действия {card.expire_date}
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