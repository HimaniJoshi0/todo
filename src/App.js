import React, { useState } from "react";
import Task from "./components/task";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo} from "./slice/reduce";

const App = () => {
  const [task, setTask] = useState("");
  const [check, setCheck]= useState(true)
  const dispatch = useDispatch();

  const addData = () => {
    if (task || check) {
      dispatch(addTodo(task));
      setTask("");
      console.log("task added");
    } 
  };


  return (
    <div className="bg-grey-30 h-screen w-screen flex flex-col items-center ">
      <div className="w-4/5  flex flex-col justify-center items-center">
        <div className="w-4/5   flex flex-col items-center mt-10">
          <h1 className="text-xl font-bold">Get Things Done</h1>

          <div className="w-4/5 flex justify-around items-center">
            <input
              type="textarea"
              className="w-4/5 h-3/6 p-5 rounded-md text-wrap"
              placeholder="what is the task today?"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
            ></input>
            <button className="w-[15%] p-1 bg-green rounded-md text-white transition ease-in-out hover:scale-110  shadow-blue-500/50" onClick={addData}>
              Add
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center mt-10">
          <Task setTask={setTask}  setCheck={setCheck}  />
        </div>

      </div>
    </div>
  );
};

export default App;
