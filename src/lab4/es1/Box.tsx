import React, { useEffect, useState } from "react";
import Search from "./Search";
import Filter from "./Filter";
import List from "./List";

function Box() {
  const [isbnList, setIsbnList] = useState([
    { id: 1, item: "abc" },
    { id: 2, item: "bdf" },
  ]);

  const [count, setCount] = useState(3); //key for list elements
  const [filter, setFilter] = useState("");

  //filtered list
  const [filteredList, setFilteredList] = useState(isbnList);

  const onInsert = (str: string): void => {
    setCount(count + 1);
    setIsbnList([...isbnList, { id: count, item: str }]);
    console.log("inside oninsert, id is: " + count);
    setFilteredList(isbnList);
  };

  const checkItem = (str: string): boolean => {
    console.log("inside checkitem : searched string " + str);
    return isbnList.filter((item) => item.item === str).length === 0;
  };

  const onDelete = (id: number): void => {
    console.log("item to cancel: " + id);
    setIsbnList(isbnList.filter((item) => item.id !== id));
    setFilteredList(isbnList);
  };

  const onFilter = (filter: string): void => {
    if (filter.trim() !== "") {
      console.log("filter criteria " + filter);
      setFilter(filter);
      setFilteredList(isbnList.filter((item) => item.item.includes(filter)));
      console.log("filtered list changed");
    } else {
      setFilter(filter);
      setFilteredList(isbnList);
    }
  };
  let empty = filter.trim() !== "";
  useEffect(() => {
    if (!empty) {
      setFilteredList(isbnList);
    } else {
      setFilteredList(isbnList.filter((item) => item.item.includes(filter)));
    }
  }, [isbnList, count, filter, empty]);

  const [word, setWord] = useState("");
  const char = "b";
  const onClick = (char: string): void => {
    setWord(word.concat(char));
    console.log(word);
  };
  return (
    <div>
      <h2>esercizio 1</h2>
      <div>
        <Search checkItem={checkItem} onInsert={onInsert} />
      </div>
      <hr></hr>
      <div>
        <h4>filter</h4>
        <Filter onFilter={onFilter} />
      </div>
      <hr></hr>
      <div>
        <List items={filteredList} onDelete={onDelete} />
      </div>
      <hr></hr>*
    </div>
  );
}
export default Box;
