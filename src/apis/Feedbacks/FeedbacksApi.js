import axios from "axios";

export const getAllFeedback = async () => {
    const res = await axios.get("/feedbacks")
    return await res.data.data;
};

export const sendFeedBack = async ()=>{
    const res = await axios.post("/feedbacks")
    return await res.data.data
}