import axios from "axios";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Context } from "../main";

const Navbar = () => {
  const { setIsAuthenticated, isAuthenticated } = useContext(Context);
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        { withCredentials: true }
      );
      toast.success(data.message);
      setIsAuthenticated(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      {isAuthenticated && (
        <nav>
          <Link to={"/"}>HOME</Link>
          <Link onClick={handleLogout}>LOGOUT</Link>
        </nav>
      )}
    </>
  );
};

export default Navbar;
