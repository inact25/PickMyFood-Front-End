import axios from "axios";
import {authToken} from "../Auth/AuthApis";


export const getStoreTransaction = async (uid) => {
    let res = await axios.get(`/transactions/store/${uid}`,{
        headers: {
            token:authToken
        }
    })
    return await res.data;
};