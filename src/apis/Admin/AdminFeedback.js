import axios from "axios";

export const getAllFeedback = async () => {
    const res = await axios.get("/feedbacks")
    return await res.data.data;
};