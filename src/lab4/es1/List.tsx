import React, { useEffect } from "react";

interface ListProps {
  items: { id: number; item: string }[];
  onDelete: (id: number) => void;
}

function List({ items, onDelete }: ListProps) {
  const empty = items.length === 0;
  //useEffect(()=>{},[items])
  return (
    <div>
      <ul>
        {!empty ? (
          items.map((el, index) => {
            return (
              <li key={el.id}>
                {el.item}
                <span
                  className="glyphicon glyphicon-trash"
                  onClick={() => onDelete(el.id)}
                ></span>
              </li>
            );
          })
        ) : (
          <div> nessun isbn presente</div>
        )}
      </ul>
    </div>
  );
}

export default List;
