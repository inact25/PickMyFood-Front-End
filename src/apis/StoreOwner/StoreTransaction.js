import axios from "axios";

export const getStoreTransaction = async (storeID) => {
    const res = await axios.get("https://dummyapi.io/data/api/user")
    return await res.data.data;
};

export const getStoreOrders = async (storeID) => {
    const res = await axios.get("https://dummyapi.io/data/api/user")
    return await res.data.data;
};