import axios from "axios";
import {authToken} from "./Auth/AuthApis";

export const getTopupList = async () => {
    let res = await axios.get(`/topUp`,{
        headers: {
            token:authToken
        }
    })
    return await res.data.data;
};

export const confirmTopup = async (uid,price)=> {
    console.log("api")
    console.log(uid+price)
    let res = await axios.post(`/wallet/transfer/${uid}`,{
        amount : price
    },{
        headers: {
            token:authToken
        }
    })
    console.log(res)
    return res.data.data
}