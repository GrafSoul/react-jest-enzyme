import React from "react";

const Personlist = ({ people = [] }) => {
  return (
    <div>
      <ul>
        {people.map((item, index) => (
          <li key={index}>
            <p>{item.firstName}</p>
            <p>{item.lastName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Personlist;
