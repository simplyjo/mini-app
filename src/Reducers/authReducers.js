
import { useNavigate } from "react-router-dom";
import { SIGN_IN, LOG_OUT, START_LOADING, END_LOADING } from "../constants";
// import Cookies from "js-cookie"



const authReducers = (state = { Auth: false, isLoading: false }, action) => {
  switch (action.type) {
    case SIGN_IN:
    
      const expirationTime = new Date(new Date().getTime() + 60000);
      // Cookies.set('auth', JSON.stringify(action.data.user), { expires: expirationTime });
      localStorage.setItem("userId",action.data.user.twitterId )
      window.location.reload()
   
      return { ...state, Auth: true };
    case LOG_OUT:
    
      console.log("logout");
      localStorage.clear();
     
      window.location.reload()
      return { ...state, Auth: false };
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default authReducers;
