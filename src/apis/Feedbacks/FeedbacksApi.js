import axios from "axios";
import {authToken} from "../Auth/AuthApis";

export const getAllFeedback = async () => {
    const res = await axios.get("/feedbacks")
    return await res.data.data;
};

export const sendFeedBack = async (id,data)=>{
    const res = await axios.post("/feedback/post",{

        storeID:id,
        userID:"empty",
        feedbackValue:data.value.toString()

    },{
        headers: {
            token:authToken
        }
    })
    return await res.data.data
}