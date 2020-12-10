import axios from "axios";
import {authToken} from "../Auth/AuthApis";
import {baseUrl} from "../Base/Configs";

export const getStoreRating = async (uid) => {
    console.log(uid)
    const res = await axios.get(`${baseUrl}/ratings/${uid}`, {
        headers: {
            token: authToken
        }
    })
    return await res.data
}