import axios from "axios"

export const getAllStores = async () => {
    const res = await axios.get("https://dummyapi.io/data/api/user")
    return await res.data.data;
};

export const deleteStore = async (storeID) => {
    const res = await axios.get("https://dummyapi.io/data/api/user")
    return await res.data.data;
};

export const updateStore = async (storeID) => {
    const res = await axios.get("https://dummyapi.io/data/api/user")
    return await res.data.data;
};

export const getAllStoreCategory = async () => {
    const res = await axios.get("https://dummyapi.io/data/api/store/category")
    return await res.data.data;
};

export const getAllProductCategory = async () => {
    const res = await axios.get("https://dummyapi.io/data/api/product/category")
    return await res.data.data;
};
