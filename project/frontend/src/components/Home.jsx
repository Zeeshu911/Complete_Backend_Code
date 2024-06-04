import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Home = () => {
  const { isAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const getAllTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/v1/task/my", {
        withCredentials: true,
      });
      setTasks(data.tasks);
    } catch (error) {
      setTasks([]);
    }
  };

  const addTask = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/task/add",
        { title, description },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      getAllTasks();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const deleteTask = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/api/v1/task/delete/${id}`,
        {
          withCredentials: true,
        }
      );
      toast.success(data.message);
      getAllTasks();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const updateTask = async (id) => {
    const updatedTask = tasks.find((task) => task._id === id);
    await axios
      .put(`http://localhost:4000/api/v1/task/update/${id}`, updatedTask, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handleInputChange = (taskId, field, value) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === taskId ? { ...task, [field]: value } : task
      )
    );
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/login");
    }
    getAllTasks();
  }, [isAuthenticated]);
  return (
    <>
      <section className="home">
        <h1>CREATE YOUR TASK</h1>
        <div className="create-task">
          <input
            type="text"
            placeholder="Your Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />{" "}
          <textarea
            placeholder="Your Task Description"
            value={description}
            rows={10}
            onChange={(e) => setDescription(e.target.value)}
          />{" "}
          <button onClick={addTask}>Create Task</button>
        </div>
        <div className="tasks">
          {tasks && tasks.length > 0 ? (
            tasks.map((element) => {
              return (
                <div className="card" key={element._id}>
                  <input
                    type="text"
                    value={element.title}
                    onChange={(e) =>
                      handleInputChange(element._id, "title", e.target.value)
                    }
                  />
                  <textarea
                    value={element.description}
                    onChange={(e) =>
                      handleInputChange(
                        element._id,
                        "description",
                        e.target.value
                      )
                    }
                  >
                    {element.description}
                  </textarea>
                  <div>
                    <button onClick={() => deleteTask(element._id)}>
                      Delete
                    </button>
                    <button onClick={() => updateTask(element._id)}>
                      Update
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>No Tasks Created!</h1>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
