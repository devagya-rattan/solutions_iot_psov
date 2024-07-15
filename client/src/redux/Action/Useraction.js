import { REGISTERED_USER } from "../actiontypes";

export const userRegisterAction = ({name,email,password}) =>{
    return{
        type: REGISTERED_USER,
        payload:{name,email,password}
    }
}