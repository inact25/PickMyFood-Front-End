import axios from "axios";
import {authToken} from "../Auth/AuthApis";
import {baseUrl} from "../Base/Configs";

export const getStoreOrders = async (uid) => {
    let res = await axios.get(`${baseUrl}/orders/store/${uid}`,{
        headers: {
            token:authToken
        }
    })
    return await res.data;
};

export const getSpecificOrders = async (uid) => {
    let res = await axios.get(`${baseUrl}/order/${uid}`,{
        headers: {
            token:authToken
        }
    })
    return res.data
}
