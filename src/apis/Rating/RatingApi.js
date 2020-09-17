import axios from "axios";
import {authToken} from "../Auth/AuthApis";

export const getStoreRating = async (uid) => {
    console.log(uid)
    const res = await axios.get(`/ratings/${uid}`,{
        headers: {
            token:authToken
        }
    })
    return await res.data
}