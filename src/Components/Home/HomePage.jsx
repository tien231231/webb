import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { deleteUser, getAllUsers } from "../../redux/apiRequest";
import { createAxios } from "../../createInstance";
import axios from "axios";
import "./home.css";
import { loginSuccess } from "../../redux/authSlice";



import MoneyManager from "../Main/MoneyManager";
import { Card } from "antd";


const HomePage = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const userList = useSelector((state) => state.users.users?.allUsers);
  const msg = useSelector((state) => state.users?.msg);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = createAxios(user, dispatch, loginSuccess);

  const handleDelete = (id) => {
    deleteUser(user?.accessToken, dispatch, id, axiosJWT);
  };

  useEffect(() => {
    if (!user) {
      //navigate("/login");
    }
    if (user?.accessToken) {
      getAllUsers(user?.accessToken, dispatch, axiosJWT);
    }
  }, []);

  return (
    <>
      <main className="home-container">
        
        <MoneyManager/>
      </main>
      
    </>
  );
};

export default HomePage;
