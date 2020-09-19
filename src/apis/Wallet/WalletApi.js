import axios from "axios";
import {authToken} from "../Auth/AuthApis";
import {baseUrl} from "../Base/Configs";

export const getTopupList = async () => {
    let res = await axios.get(`${baseUrl}/topUp`,{
        headers: {
            token:authToken
        }
    })
    return await res.data.data;
};

export const confirmTopup = async (uid,price)=> {
    let res = await axios.post(`${baseUrl}/wallet/transfer/${uid}`,{
        amount : price
    },{
        headers: {
            token:authToken
        }
    })
    return res.data.data
}