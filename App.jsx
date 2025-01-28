function App() {
  const { useState } = React;

  let count = 0;

  function handleKey(event) {
    // if (event.target.value === "enter")
  }
  function Todo() {
    return (
      <li>
        <label className="text-xl flex items-baseline gap-4">
          {" "}
          {/* Changed to items-start */}
          <div className="flex h-full items-center">
            {/* Checkbox container */}
            <input
              type="checkbox"
              className="h-6 w-6 min-h-6 min-w-6"
              onKeyDown={handleKey}
            />
          </div>
          <span className="text-3xl max-w-48 break-words flex-1 min-h-[48px]">
            {newItem}
          </span>
          <div className="flex h-full items-center ml-auto">
            {/* Button container */}
            <button className="outline-2 hover:bg-red-200 w-20 h-12 rounded-md  transition   rounded ml-auto" id="deleteBtn">
              delete
            </button>
          </div>
        </label>
      </li>
    );
  }

  const [Comps, setComp] = React.useState(""); // Initialize Comps as state
  const [newItem, setNewItem] = React.useState(""); // Track new item input

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
    if (event.target.value.trim() == "a") {
    } else {
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    setComp((prevComps) => [...prevComps, <Todo key={prevComps.length} />]);
    setNewItem("");
  }

  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center bg-gray-100"
      id="container"
    >
      <div className="flex flex-row w-96 gap-4 m-5" id="inputContainer">
        <input
          type="text"
          placeholder="enter a task"
          className="outliner rounded-md h-12 shadow-xl flex-1 p-2"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="outliner h-12 w-16 rounded-md shadow-xl bg-white transition hover:bg-blue-100"
          id="submitBtn"
          onClick={handleSubmit}
        >
          add
        </button>
      </div>

      <div
        className="outliner bg-white w-96 h-auto rounded-md shadow-xl p-12 gap-12"
        id="tasks"
      >
        <ol className="space-y-4">
          {Comps} {/* Render the Comps array here */}
        </ol>
      </div>
    </div>
  );
}

export default App;
