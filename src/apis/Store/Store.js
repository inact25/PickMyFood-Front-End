import axios from "axios"
import {authToken} from "../Auth/AuthApis";

export const getAllStores = async () => {
    const res = await axios.get("/stores")
    return await res.data.data;
};

export const getProductStore = async (uid) => {
    const res = await axios.get(`/products/${uid}`)
    return await res.data.data;
};

export const getSpecificProduct = async (uid) =>{
    const res = await axios.get((`/product/${uid}`))
    return await res.data.data
};

export const getStoreProfile = async (uid) => {
    let res = await axios.get(`/store/${uid}`)
    return await res.data.data;
};

export const updateStoreProfile = async (uid, data) => {
    let res = await axios.put(`/store/update/${uid}`, {
        storeName:data.storeName.toString(),
        storeAddress:data.storeAddress.toString(),
        storeOwner:data.storeOwner.toString(),
        storeUsername:data.storeUsername.toString(),
        storePassword:data.storePassword.toString(),
        storeImage:data.storeImage,
        storeQrPath:data.storeQrPath,
        storeCategory:{
            storeCategoryID:data.storeCategory.storeCategoryID.toString()
        }
    })

    return await res.data;
};

export const deleteStore = async (uid) => {
    const res = await axios.delete(`/store/delete/${uid}`,{
        headers: {
            token:authToken
        }
    })
    return await res.data
}






