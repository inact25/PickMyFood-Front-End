import axios from "axios";

export const getAllFeedback = async () => {
    const res = await axios.get("https://dummyapi.io/data/api/user")
    return await res.data.data;
};