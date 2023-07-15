import { useState } from "react";

const Count = () => {
  const [name, setName] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target.elements.name.value;
    const sortList = input.split(",").sort((a, b) => {
      const nameA = a.trim().split(" ");
      const nameB = b.trim().split(" ");
      console.log(nameA[nameA.length - 1], nameB[nameB.length - 1]);
      return nameA[nameA.length - 1].localeCompare(nameB[nameB.length - 1]);
    });
    setName(sortList);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="vui lòng nhập tên" />
        <button type="submit">Handle</button>
      </form>
      <ul>
        {name.map((value, index) => {
          return (
            <li key={index}>
              {index + 1}. {value}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Count;
