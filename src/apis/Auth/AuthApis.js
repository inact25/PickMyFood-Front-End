import axios from "axios";
import Swal from "sweetalert2";

export const authToken = localStorage.getItem('utoken')

export const AuthApis = async (user, password) => {
    const userData = {
        username: user,
        password:password
    }
    let result = await axios.post(`/user/login`,  userData )
    return result.data
}

export const StoreLogin = async (user, password) => {
    const userData = {
        storeUsername: user,
        storePassword: password
    }
    let result = await axios.post(`/store/login`,  userData )
    return result.data
}

export const storeRegister = async (data) => {
    let res = await axios.post('/store/register',{
        storeName : data.storeName.toString(),
        storeAddress : data.storeAddress,
        storeOwner : data.storeOwner.toString(),
        storeUsername : data.storeUsername.toString(),
        storePassword : data.storePassword.toString(),
        storeCategory : {
            storeCategoryID:data.storeCategoryId.toString()
        }
    })
    return res.data
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
export const isAdmin = (history,location) => {
    if (localStorage.getItem('utoken') !== null){
       history.push("/");
    }else{
        if(window.location.pathname !== '/login'){
        Swal.fire("Oops", "You need login first", "error");
        history.push('/devmas');
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
