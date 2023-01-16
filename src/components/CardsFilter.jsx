import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const CardsFilter = ({filter, setFilter, selectedSortList, orientationList, searchList}) => {
    return (
        <div className="container text-center col-lg-9 ">
            <div className="row">
                <div className="col">
                    <h4>Поиск</h4>
                    <MySelect value={filter.selectedSearch}
                              defaultValue="Поиск по"
                              onChange={selectedSearch => setFilter({...filter, selectedSearch: selectedSearch, querySearch: ""})}
                              options={searchList}/>
                    <MyInput
                        value={filter.querySearch}
                        onChange={event => setFilter({...filter, querySearch: event.target.value})}
                        placeholder="Введите начальные данные"/>
                </div>
                <div className="col">
                    <h4>Сортировка</h4>
                    <MySelect value={filter.sortDirection}
                              defaultValue="Направление вывода"
                              onChange={sortDirection => setFilter({...filter, sortDirection: sortDirection})}
                              options={orientationList}/>

                    <MySelect value={filter.querySort}
                              defaultValue="Сортировка по"
                              onChange={selectedSort => setFilter({...filter, querySort: selectedSort})}
                              options={selectedSortList}/>
                </div>
            </div>
        </div>
    );
};

export default CardsFilter;