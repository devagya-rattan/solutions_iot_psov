import { REGISTERED_USER } from "../actiontypes";
export const userRegisterInitialState = {
  userdata: [],
};
const userReducer = (state = userRegisterInitialState, action) => {
  switch (action.type) {
    case REGISTERED_USER:
      return {
        ...state,
        userdata: [...state.userdata, action.payload],
      };
    default:
      return state;
  }
};
export default userReducer;
