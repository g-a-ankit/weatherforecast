import { set } from "lodash";
import React, { useEffect, useState } from "react";

const Try = () => {
  const [list, setList] = useState([
    { name: "  quer   " },
    { name: "  asd    " },
    { name: "  jkl    " },
  ]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useeffect running");
  }, [list]);
  const addlist = (val) => {
    setCount(count + 1);
    // console.log("adding a list ", list);
    // const obj = { name: val };
    // const newlist = list.concat(obj);
    // setList(newlist);
    // console.log("added a list ", list);
  };
  const deletelist = (val) => {
    setCount(count - 1);
    // console.log("deleting ");
    // const newlist = list.filter((item) => item.name !== val);
    // console.log(newlist);
    // setList(newlist);
  };
  const updatelist = (val, update) => {
    const newlist = list.map((item) => {
      if (item.name === val) {
        const updateditem = { name: update };
        return updateditem;
      }
      return item;
    });
    setList(newlist);
    console.log("original list ", list);
  };
  return (
    <>
      {count}
      <br />
      <button onClick={() => addlist("   asdf   ")}>add</button>
      <br />
      <button onClick={() => deletelist("   asdf   ")}>delete</button>
      <br />
      <button onClick={() => updatelist("   asdf   ", "   updated   ")}>
        update
      </button>
    </>
  );
};

export default Try;
