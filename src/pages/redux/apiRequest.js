import axios from "axios";
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "./authSilce";
import { toast } from 'react-toastify';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    console.log(dispatch)
    try {
        const res = await axios.post("https://reqres.in/api/login", user);
        console.log(res.data);
        dispatch(loginSuccess(res.data));
        toast.success("Login Success");
        navigate("/");

    } catch (err) {
        dispatch(loginFailed);
        toast.error("Sai Email hoac Password");
    }
};

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post("https://reqres.in/api/register", user);
        dispatch(registerSuccess());
        navigate("/login");

    } catch (err) {
        dispatch(registerFailed);
    }
}
