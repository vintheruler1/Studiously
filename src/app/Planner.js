import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Planner = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  // Load tasks from cookies when the component mounts
  useEffect(() => {
    const savedTasks = Cookies.get("tasks");
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      setItems(parsedTasks);
    }
  }, []);

  // Function to add a new item to the planner
  const addItem = () => {
    if (text.trim() === "") return;
    const newItems = [...items, { text, dueDate: "" }];
    setItems(newItems);
    Cookies.set("tasks", JSON.stringify(newItems), { expires: 7 }); // Store tasks in cookies for 7 days
    setText("");
  };

  // Function to delete an item by its index
  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    Cookies.set("tasks", JSON.stringify(newItems), { expires: 7 }); // Update cookies after deletion
  };

  // Function to format the planner items (you can replace this with your own logic)
  const formatText = () => {
    // Implement your formatting logic here
  };

  return (
    <div className="p-4 border rounded bg-blue-400">
      <div className="mb-4">
        <input
          type="text"
          className="border rounded p-2 w-full"
          placeholder="Add an item..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
          onClick={addItem}
        >
          Add
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mb-2" style={{ color: "black" }}>
            {item.text} - {item.dueDate}
            <button
              className="bg-red-500 hover-bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded"
              onClick={() => deleteItem(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Planner;
