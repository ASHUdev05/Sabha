import React, { useState, useEffect } from "react";
import './App.css';
import Sidebar from './Sidebar';
import Feed from "./Feed";
import db from './firebase';
const words = ["talk", "share feelings","share ideas","express thoughts","meet new people","make you feel good."];
let count = 0;

async function getData() {
  const query = db.collection("posts");
  const snapshot = await query.get();
  const size = snapshot.size;
  count = size;
};

getData();
function App() {
  
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length) return;

    if ( subIndex === words[index].length + 1 && 
        index !== words.length - 1 && !reverse ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
                150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);


  return (
    <div>
      <div className="nav">
        <div className="count">Total Messages Delivered: {count}</div>
        <div className="anim">
        <h1>
        A place to {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </h1>
      </div>
      </div>
    <div className="app">
      {/*<div className="app-header">
      <h3>Sabha</h3>
      </div>*/}

      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />
    </div>
    </div>
  );
}

export default App;
