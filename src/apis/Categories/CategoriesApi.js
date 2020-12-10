import axios from "axios";
import {authToken} from "../Auth/AuthApis";
import {baseUrl} from "../Base/Configs";

export const getAllStoreCategory = async () => {
    const res = await axios.get(`${baseUrl}/storeCategories`)
    return await res.data.data;
};

export const getAllProductCategory = async () => {
    const res = await axios.get(`${baseUrl}/productCategories`)
    return await res.data.data;
};

export const updateProductCategory = async (id,name) => {
    let res = await axios.put(`${baseUrl}/productCategories/update/${id}`, {
        productCategoryName: name,
    })

    return await res.data;
};

export const updateStoreCategory = async (id,name) => {
    let res = await axios.put(`${baseUrl}/storeCategories/update/${id}`, {
        storeCategoryName: name,
    }, {
        headers: {
            token: authToken
        }
    })

    return await res.data;
};

export const addStoreCategory = async (categoryName) => {
    const res = await axios.post(`${baseUrl}/storeCategory/add`, {
        storeCategoryName: categoryName.toString()
    }, {
        headers: {
            token: authToken
        }
    })
    return await res.data
}

export const addProductCategory = async (categoryName) => {
    const res = await axios.post(`${baseUrl}/productCategory/add`, {
        productCategoryName: categoryName.toString()
    }, {
        headers: {
            token: authToken
        }
    })
    return await res.data
}
