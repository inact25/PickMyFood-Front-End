import axios from "axios";

export const getAllStoreProduct = async () => {
    const res = await axios.get("https://dummyapi.io/data/api/user")
    return await res.data.data;
};

export const addStoreProduct = async (storeID) => {
    const res = await axios.get("https://dummyapi.io/data/api/user")
    return await res.data.data;
};

export const deleteStoreProduct = async (storeID) => {
    const res = await axios.get("https://dummyapi.io/data/api/user")
    return await res.data.data;
};

