import axios from "axios";
import {authToken} from "../Auth/AuthApis";

export const getStoreOrders = async (uid) => {
    let res = await axios.get(`/orders/store/${uid}`,{
        headers: {
            token:authToken
        }
    })
    return await res.data;
};

export const getSpecificOrders = async (uid) => {
    let res = await axios.get(`/order/${uid}`,{
        headers: {
            token:authToken
        }
    })
    return res.data
}
