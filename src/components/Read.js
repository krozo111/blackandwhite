import { useState, useEffect } from "react";
import React from "react";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

function Read() {
  const [titles, setTitles] = useState([]);
  const titleCollectionRef = collection(db, "foodList");

  useEffect(() => {
    const getTitles = async () => {
      const data = await getDocs(titleCollectionRef);
      setTitles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTitles();
  }, []);
  return (
    <div>
      {titles.map((item, index) => {
        return (
          <li key={index}>
            <h2>Title: {item.title}</h2>
            <h3>Price: {item.price}</h3>
            <p>desc: {item.desc}</p>
            <img src={item.img} alt={item.title} width="230" height="150" />
          </li>
        );
      })}
    </div>
  );
}

export default Read;
