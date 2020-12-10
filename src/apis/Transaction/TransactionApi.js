import axios from "axios";
import {authToken} from "../Auth/AuthApis";
import {baseUrl} from "../Base/Configs";

export const getStoreTransaction = async (uid) => {
    let res = await axios.get(`${baseUrl}/transactions/store/${uid}`, {
        headers: {
            token: authToken
        }
    })
    return await res.data;
};