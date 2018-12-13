import { USER_INFO } from "./actionType";


export const userInfo = (data) => {
    console.log("show user info", data);
    return {
        type: USER_INFO,
        info: data
    }
}
