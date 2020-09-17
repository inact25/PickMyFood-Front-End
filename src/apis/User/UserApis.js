import axios from "axios";
import {authToken} from "../Auth/AuthApis";

export const getUserProfile = async (uid) => {
    let res = await axios.get(`/user/${uid}`)
    return await res.data.data;
};

export const getAllUsers = async () => { //tambain s jadi users
    const res = await axios.get("/users?keyword=&page=0&limit=6",{
        headers: {
            token:authToken
        }
    })
    return await res.data.data;
};

export const updateUserProfile = async (uid, data) => {
    let res = await axios.put(`/user/update/${uid}`, {
        userFirstName: data.userFirstName.toString(),
        userLastName: data.userLastName.toString(),
        userAddress: data.userAddress.toString(),
        userPhone: data.userPhone.toString(),
        userEmail: data.userEmail.toString(),
        userImage: data.userImage,
        userStatus: data.userStatus.toString(),
        auth: {
            username: data.auth.username.toString(),
            password: data.auth.password.toString(),
        }
    })

    return await res.data;
};

export const deleteUser = async (uid) => {
    console.log("apis")
    console.log(uid)
    const res = await axios.delete(`/user/delete/${uid}`,{
        headers: {
            token:authToken
        }
    })
    return await res.data
}
