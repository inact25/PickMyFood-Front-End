import axios from "axios";

export const getQRStoreImage = async (storeID) => {
    const data = {
        token: "_Mv8GZQGgHefypuE3zmDhtxavgW6hNgpHOsNgBsx0J5-Ew95YU5rjrMywwSUUX5F",
        storeID: storeID,
        format: "SVG",
        title: "pickMyFood"
    }
    const res = await axios.get(
        `https://api.qr-code-generator.com/v1/create?
             access-token=${data.token}&
             frame_name=bottom-frame&
             qr_code_text=${data.storeID}&
             image_format=${data.format}&
             frame_color=%23C21313&
             frame_text_color=%23C21313&
             frame_icon_name=business&
             frame_text=${data.title}&
             marker_left_template=version8&
             marker_right_template=version7&
             marker_bottom_template=version6&
             marker_right_inner_color=%23C21313&
             marker_left_inner_color=%23C21313&
             marker_bottom_inner_color=%23C21313&
             qr_code_logo=scan-me-square`
    )
    return await res.data;
}


export const downloadQRStoreImage = async (storeID) => {
    const data = {
        token: "_Mv8GZQGgHefypuE3zmDhtxavgW6hNgpHOsNgBsx0J5-Ew95YU5rjrMywwSUUX5F",
        storeID: storeID,
        format: "PNG",
        title: "pickMyFood",
        download: "1",
        width: "1000"
    }
    const res =
        `https://api.qr-code-generator.com/v1/create?
             access-token=${data.token}&
             frame_name=bottom-frame&
             qr_code_text=${data.storeID}&
             image_format=${data.format}&
             frame_color=%23C21313&
             frame_text_color=%23C21313&
             frame_icon_name=business&
             frame_text=${data.title}&
             marker_left_template=version8&
             marker_right_template=version7&
             marker_bottom_template=version6&
             marker_right_inner_color=%23C21313&
             marker_left_inner_color=%23C21313&
             marker_bottom_inner_color=%23C21313&
             qr_code_logo=scan-me-square&
             download=${data.download}&
             image_width=${data.width}`

    window.open(res,"_self","width=1, height=1")
    window.close()
    return res
}

