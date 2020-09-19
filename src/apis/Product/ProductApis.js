import axios from "axios";
import {authToken} from "../Auth/AuthApis";
import {baseUrl} from "../Base/Configs";

export const updateProduct = async (uid, data) => {
    let res = await axios.put(`${baseUrl}/product/update/${uid}`, {
        productName: data.productName.toString(),
        productStock: data.productStock.toString(),
        productStatus: data.productStatus.toString(),
        productImage: data.productImage,
        productPrice: {
            price: data.productPrice.price.toString(),
        },
        productCategory: {
            productCategoryID: data.productCategory.productCategoryID.toString(),
        }
    },{
        headers: {
            token:authToken
        }
    })
    return await res.data;
};

export const addStoreProduct = async (uid,data) => {
    const res = await axios.post(`/product/add/${uid}`,{
        productName:data.productName.toString(),
        productCategory:{
            productCategoryID:data.productCategory.productCategoryID.toString()
        },
        productStock:data.productStock.toString(),
        productPrice:{
            price:data.productPrice.price.toString()
        },
        productImage:data.productImage.toString()
    },{
        headers: {
            token:authToken
        }
    })

    return await res.data;
};
export const getActiveProductStore = async (uid) => {
    const res = await axios.get(`${baseUrl}/products/${uid}`)
    return await res.data.data;
};

export const getDeletedProductStore = async (uid)=>{
    const res = await axios.get(`${baseUrl}/products/NA/${uid}`)
    return await res.data.data;
}

export const reactiveProductStore = async (uid) => {
    console.log("api")
    console.log(uid)
    const res = await axios.put(`${baseUrl}/product/changeActive/${uid}`,{
        headers: {
            token:authToken
        }
    })
    return await res.data.data
}

export const deleteStoreProduct = async (uid) => {
    const res = await axios.delete(`/product/delete/${uid}`,{
        headers: {
            token:authToken
        }
    })
    return await res.data
}
