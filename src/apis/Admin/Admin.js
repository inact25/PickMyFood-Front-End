import axios from "axios";

export const getAllStore = async () => {
    const res = await axios.get("https://dummyapi.io/data/api/store")
    return await res.data.data;
};

export const getAdminProfile = async () => {
    const res = await axios.get("https://dummyapi.io/data/api/user")
    return await res.data.data;
};