
import axios from "axios";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "../types"; 

export const authAction = (userEmail, userPassword) => (dispatch) => {
    const options = {
        method: "GET",
        headers: { "content-type": "application/json" },
        url: "https://jsonplaceholder.typicode.com/users",
    };
    axios(options)
        .then((res) => {
            console.log("the data has been send to the server and posted");
            console.log("API Response", res.data);
            if (res.data) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    PAYLOAD: res.data,
                    message: "FORM ACTION SUCCESS"
                });
            }
            else {
                dispatch({
                    type: LOGIN_FAIL
                });
                alert(res.data.message);
            }
        })
        .catch((err) => {
            alert("invalid userEmail/Password");
        });
};

