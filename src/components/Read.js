import { useState, useEffect } from "react";
import React from "react";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

function Read() {
  const [titles, setTitles] = useState([]);
  const titleCollectionRef = collection(db, "foodLista");

  useEffect(() => {
    const getTitles = async () => {
      const data = await getDocs(titleCollectionRef);
      setTitles(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getTitles();
  }, []);
        return <div>{titles.map((item , index) =>{
    return <li key={index}>
      <h1>Title: {item.title}</h1>
      <h3>Price: {item.price}</h3>
      <h3>ID: {item.id}</h3>
      <h3>index: {index}</h3>
      
      </li>;
  })}</div>
  
}

export default Read;
