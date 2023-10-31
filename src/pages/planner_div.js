import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Planner = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [completedCount, setCompletedCount] = useState(0);
  const [completedItems, setCompletedItems] = useState([]);

  useEffect(() => {
    const savedTasks = Cookies.get("tasks");
    const savedCompletedTasks = Cookies.get("completedTasks");
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      setItems(parsedTasks);
    }
    if (savedCompletedTasks) {
      const parsedCompletedTasks = JSON.parse(savedCompletedTasks);
      setCompletedItems(parsedCompletedTasks);
    }
  }, []);

  const addItem = () => {
    if (text.trim() === "") return;
    const newItems = [
      ...items,
      {
        text,
        dueDate,
        completed: false,
      },
    ];
    setItems(newItems);
    Cookies.set("tasks", JSON.stringify(newItems), { expires: 7 });
    setText("");
    setDueDate("");
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
    const completedTask = newItems.splice(index, 1)[0];
    setItems(newItems);
    setCompletedCount(completedCount + 1);
    setCompletedItems([...completedItems, completedTask]);
    Cookies.set("tasks", JSON.stringify(newItems), { expires: 7 });
    Cookies.set("completedTasks", JSON.stringify(completedItems), { expires: 7 });
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const newItems = [...items];
    const [movedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, movedItem);
    setItems(newItems);
    Cookies.set("tasks", JSON.stringify(newItems), { expires: 7 });
  };

  return (
    <div className="planner-container grid grid-cols-3 gap-4 p-4 bg-blue-400 rounded border">
      <div className="input-container col-span-2 grid grid-cols-2 gap-2 items-center">
        <input
          type="text"
          placeholder="Add an item..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border rounded p-2"
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addItem}
      >
        Add
      </button>
      <div className="tasks-container col-span-3 bg-blue-400 border rounded p-4 text-white">
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
                        className="task-item flex justify-between items-center mb-2"
                      >
                        <span
                          style={{ textDecoration: item.completed ? "line-through" : "none" }}
                          className="text-black"
                        >
                          {item.text} - {item.dueDate}
                        </span>
                        <button
                          className="bg-red-500 hover.bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded"
                          onClick={() => deleteItem(index)}
                        >
                          Delete
                        </button>
                        <button
                          className="bg-green-500 hover.bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded"
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
      </div>
      <div className="completed-tasks col-span-3 mt-4">
        <h2 className="text-xl font-bold mb-2">Completed Tasks:</h2>
        {completedItems.map((item, index) => (
          <div key={index}>
            <span
              style={{ textDecoration: "line-through" }}
              className="text-white"
            >
              {item.text} - {item.dueDate}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planner;
