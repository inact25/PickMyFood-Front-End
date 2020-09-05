import axios from "axios";

export const getStoreInfo = async (storeID) => {
    const res = await axios.get("https://dummyapi.io/data/api/user")
    return await res.data.data;
};

export const updateStoreInfo = async (storeID) => {
    const res = await axios.get("https://dummyapi.io/data/api/user")
    return await res.data.data;
};

export const setPoinValue = async (storeID) => {
    const res = await axios.get("https://dummyapi.io/data/api/user")
    return await res.data.data;
};

