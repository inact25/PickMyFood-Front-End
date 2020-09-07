import axios from "axios";
import Swal from "sweetalert2";

export const Auth = async (user,password) => {
    const userData = {
        username: user,
        password:password
    }
    let result = await axios.post(`/user/login`,  userData )
    return result
}

export const isLogin = (history,location) => {
    if (localStorage.getItem('utoken') !== null){
       history.push("/");
    }else{
        if(window.location.pathname !== '/login'){
        Swal.fire("Oops", "You need login first", "error");
        history.push('/login');
        }
    }
}

export const isRegister = (history,location) => {
    if (localStorage.getItem('utoken') !== null){
        history.push("/");
    }else{
        if(window.location.pathname !== '/register') {
            history.push('/register');
        }
    }
}
