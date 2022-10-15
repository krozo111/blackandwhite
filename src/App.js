import Header from "./components/Header";
import React from "react";
import ListMenu from "./components/ListMenu";
import About from "./components/About";
//import Read from "./components/Read";
//import items from './data';
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <ListMenu />
    </div>
  );
}
