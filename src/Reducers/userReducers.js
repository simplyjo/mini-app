import { USER_UPDATE, UPDATE_USER_STATE , UPDATE_REWARD_STATE} from "../constants";

let userData = {};

const userReducers = (state = {   user:[], rewards:[]}, action) => {
  switch (action.type) {
    
    case UPDATE_USER_STATE:
      console.log("UPDATE_USER_STATE", action.data.user)
      localStorage.setItem('user',JSON.stringify(action.data.user) )
      // window.location.reload(false)

      console.log("stateUser1", action.data.user)

      return { ...state, user:action.data.user };
    case UPDATE_REWARD_STATE:
  
      return { ...state, rewards: action.payload.data };

    default:
      return state;
  }
};

export default userReducers;
