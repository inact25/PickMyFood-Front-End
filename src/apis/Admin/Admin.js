import axios from "axios";
import {baseUrl} from "../Base/Configs";

export const getAdminProfile = async (uid) => {
    let res = await axios.get(`${baseUrl}/user/${uid}`)
    return res.data.data;
};

export const updateAdminProfile = async (uid, data) => {
    let res = await axios.put(`${baseUrl}/user/update/${uid}`, {
        userFirstName: data.userFirstName.toString(),
        userLastName: data.userLastName.toString(),
        userAddress: data.userAddress.toString(),
        userPhone: data.userPhone.toString(),
        userStatus: data.userStatus.toString(),
        userImage: data.userImage.toString(),
        auth: {
            username: data.auth.username.toString(),
            password: data.auth.password.toString()
        }
    })
    return res.data
};


