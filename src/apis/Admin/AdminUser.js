import axios from "axios";

export const getAllUsers = async () => {
    const res = await axios.get("/user")
    return await res.data.data;
};

export const deleteUsers = async (userID) => {
    const res = await axios.get("https://dummyapi.io/data/api/user")
    return await res.data.data;
};

export const updateUsers = async (userID) => {
    const res = await axios.get("https://dummyapi.io/data/api/user")
    return await res.data.data;
};