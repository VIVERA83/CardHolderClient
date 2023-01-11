import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const CardsFilter = ({filter, setFilter, selectedSortList}) => {
    return (
        <div>
            <hr style={{margin: "1em", color: "red", border: ".1em solid red"}}></hr>
            <MyInput style={{margin: "1em 0"}}
                     value={filter.querySearch}
                     onChange={event => setFilter({...filter, querySearch: event.target.value})}
                     placeholder="поиск номеру"/>

            <MySelect value={filter.querySort}
                      defaultValue="Сортировка по"
                      onChange={selectedSort => setFilter({...filter, querySort: selectedSort})}
                      options={selectedSortList}/>
        </div>
    );
};

export default CardsFilter;