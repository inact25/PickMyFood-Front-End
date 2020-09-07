import axios from "axios";

export const getAdminProfile = async (uid) => {
    let res = await axios.get(`/user/${uid}`)
    return res.data.data;
};


