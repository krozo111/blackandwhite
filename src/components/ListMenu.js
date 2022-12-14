import React, { useState } from "react";
import Menu from "./Menu";
import MenuCategories from "./MenuCategories";
import items from "../api/db.json";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function ListMenu() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <h3>Traditional Colombian Street Food</h3>
          <div className="underline"></div>
        </div>
        <MenuCategories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default ListMenu;
