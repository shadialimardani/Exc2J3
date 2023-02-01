import "./App.css";
import Cost from "./components/Cost";
import AddNewItem from "./components/AddNewItem";

import React, { useState } from "react";


function App() {

  const [products, setProduct] = useState(
    [
      { id: 1, type: "face masque", amount: 500 },
      { id: 2, type: "eye liner", amount: 1500 },
      { id: 3, type: "perfume", amount: 3500 },
      { id: 4, type: "moisturizing cream", amount: 1800 },
      { id: 5, type: "hair drier", amount: 2300 },
      { id: 6, type: "mascara", amount: 400 },
    ]
  )
  const addItemHandler = (newItem) => {
    let item = products
    setProduct([...item, { ...newItem, id: item.length + 1 }])
  }
  return (
    <div className="App">
      {
        products.map((item) => {
          return <Cost key={item.id} arg={item} />;
        })
      }
      <AddNewItem addItemFunc={addItemHandler} />
    </div>
  );
}

export default App;
