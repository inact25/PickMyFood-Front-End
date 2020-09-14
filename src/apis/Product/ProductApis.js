import axios from "axios";
import {authToken} from "../Auth/AuthApis";

export const updateProduct = async (uid, data) => {
    let res = await axios.put(`/product/update/${uid}`, {
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
