import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteUser, getAllUsers } from "../../redux/apiRequest";
import { createAxios } from "../../createInstance";

import "./setting.css";
import { loginSuccess } from "../../redux/authSlice";
import { DeleteBtn } from "../DeleteBtn/DeleteBtn";

const Setting =() =>{
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
       navigate("/login");
    }
    if (user?.accessToken) {
      getAllUsers(user?.accessToken, dispatch, axiosJWT);
    }
  }, []);

    
    return(<>
    <div className="setting-title">Hi,{user?<p>{user.username}</p>:<p></p>}</div>
      <div className="setting-role">
        {`Your role: ${user?.admin ? `Admin` : `User`}`}
      </div>
      <div className="errorMsg">{msg}</div>
      <div className="setting-userlist">
        {userList?.map((user) => {
          return (
            <div className="setting-container">
              <div className="home-user">{user.username}</div>
              
              
              <button
                className="delete-user"
                onClick={() => handleDelete(user._id)}
              >
                
                <DeleteBtn/>
              </button>
            </div>
          );
        })}
      </div>
     
    
    </>)
}
export default Setting