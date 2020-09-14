import axios from "axios";
import {authToken} from "../Auth/AuthApis";

export const getAllStoreCategory = async () => {
    const res = await axios.get("/storeCategories")
    return await res.data.data;
};

export const getAllProductCategory = async () => {
    const res = await axios.get("/productCategories")
    return await res.data.data;
};

export const updateProductCategory = async (id,name) => {
    let res = await axios.put(`/productCategories/update/${id}`, {
        productCategoryName:name,
    })

    return await res.data;
};

export const updateStoreCategory = async (id,name) => {
    let res = await axios.put(`/storeCategories/update/${id}`, {
        storeCategoryName:name,
    },{
        headers: {
            token:authToken
        }
    })

    return await res.data;
};

export const addStoreCategory = async (categoryName) => {
    const res = await axios.post("/storeCategory/add", {
        storeCategoryName: categoryName.toString()
    },{
        headers: {
            token:authToken
        }
    })
    return await res.data
}

export const addProductCategory = async (categoryName) => {
    const res = await axios.post("/productCategory/add", {
        productCategoryName: categoryName.toString()
    },{
        headers: {
            token:authToken
        }
    })
    return await res.data
}
