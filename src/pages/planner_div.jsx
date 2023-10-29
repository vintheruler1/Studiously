import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Planner = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const savedTasks = Cookies.get("tasks");
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      setItems(parsedTasks);
    }
  }, []);

  const addItem = () => {
    if (text.trim() === "") return;
    const newItems = [...items, { text, dueDate: "", completed: false }];
    setItems(newItems);
    Cookies.set("tasks", JSON.stringify(newItems), { expires: 7 });
    setText("");
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    Cookies.set("tasks", JSON.stringify(newItems), { expires: 7 });
  };

  const markAsDone = (index) => {
    const newItems = [...items];
    newItems[index].completed = true;
    newItems.splice(index, 1); // Remove the task from the list
    setItems(newItems);
    setCompletedCount(completedCount + 1);
    Cookies.set("tasks", JSON.stringify(newItems), { expires: 7 });
  };
  

  const onDragEnd = (result) => {
    if (!result.destination) return; // No destination, do nothing

    const newItems = [...items];
    const [movedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, movedItem);

    setItems(newItems);
    Cookies.set("tasks", JSON.stringify(newItems), { expires: 7 });
  };

  return (
    <div className="p-4 border rounded bg-blue-400 w-3/4 mx-auto">
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
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable key={index} draggableId={`task-${index}`} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="mb-2"
                      style={{ color: "white" }}
                    >
                      <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>
                        {item.text} - {item.dueDate}
                      </span>
                      <button
                        className="bg-red-500 hover-bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded"
                        onClick={() => deleteItem(index)}
                      >
                        Delete
                      </button>
                      <button
                        className="bg-green-500 hover-bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded"
                        onClick={() => markAsDone(index)}
                      >
                        Done
                      </button>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <div>Number of Assignments Completed: {completedCount}</div>
    </div>
  );
};

export default Planner;
