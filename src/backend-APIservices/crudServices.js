import axios from 'axios';

// read product function
export function createProduct(productName, productPrice, quantity, img, unitPrice, totalPrice){
    const url = '/api/v1/createProduct';
    const postBody = {
        productName: productName,
        productPrice: productPrice,
        quantity: quantity,
        img: img,
        unitPrice: unitPrice,
        totalPrice: totalPrice
    }
    return axios.post(url, postBody)
        .then((res) => {
            if (res.status === 200) {
                return true;
            }
            else {
                return false;
            }
        })
        .catch((err) => {
            console.log(err)
            return false;
        })
};


// read product function
export function readProduct(){
    const url = '/api/v1/readProduct';
    return axios.get(url)
        .then((res) => {
            if (res.status === 200) {
                return res.data['data']
            }
            else {
                return false;
            }
        })
        .catch((err) => {
            console.log(err)
            return false;
        })
};
// read product by id 
export function ReadByID(id){
    let URL="/api/v1/readProductByID/"+id;
    return axios.get(URL).then((res)=>{
        if(res.status===200){
            return res.data['data'];
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}
// update product function
export function updateProduct(id, productName, productPrice,quantity, img, unitPrice, totalPrice){
    const url = '/api/v1/updateProduct/' + id;
    const postBody = {
        productName: productName,
        productPrice: productPrice,
        quantity: quantity,
        img: img,
        unitPrice: unitPrice,
        totalPrice: totalPrice
    }
   return axios.post(url, postBody)
        .then((res) => {
            if (res.status === 200) {
                return true;
            }
            else {
                return false;
            }
        })
       .catch((err) => {
           console.log(err)
           return false;
        })
}
// delete function
export function deleteProduct(id){
    const url = '/api/v1/deleteProduct/' + id;
    return axios.get(url)
        .then((res) => {
            if (res.status === 200) {
                return true;
            }
            else {
                return false;
            }
        })
        .catch((err) => {
            console.log(err)
            return false;
        })
};