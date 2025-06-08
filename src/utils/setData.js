import { db } from '../firebaseConfig';
import { ref, set } from "firebase/database";

export const saveProductData = (productId, name, price, mrp, category, description, imgPng, img1, img2, img3) => {
    const productData =
    {
        id:productId,
        name: name,
        price: price,
        mrp: mrp,
        category: category,
        description: description,
        imgPng: imgPng,
        imgUrl1: img1,
        imgUrl2: img2,
        imgUrl3: img3
    }


    const dbRef = ref(db, `/products/${productId}`);

    set(dbRef, productData)
        .then(() => {
            console.log("Data saved succesfully");
        })
        .catch((error) => {
            console.log(error);
        });
}



// Usage:
/*
addProduct(
    'p001',
    'Product 1',
    299.99,
    499,
    'cat 1',
    'This is a new plant description.',
    'https://firebasestorage.googleapis.com/v0/b/botanica-9b18a.appspot.com/o/products%2Fafrican-violet.webp?alt=media&token=7c3c9b3d-131a-4ca0-87eb-d7b4230da271',
    'https://firebasestorage.googleapis.com/v0/b/botanica-9b18a.appspot.com/o/products%2Fafrican-violet-1.webp?alt=media&token=139607d0-f9dc-4b91-a2ea-8624f2e1616d',
    'https://firebasestorage.googleapis.com/v0/b/botanica-9b18a.appspot.com/o/products%2Fafrican-violet-2.webp?alt=media&token=ea86c1f6-02c2-47b7-97e4-aa4426aabebb',
    'https://firebasestorage.googleapis.com/v0/b/botanica-9b18a.appspot.com/o/products%2Fafrican-violet-3.webp?alt=media&token=1333bba1-cc0b-4cef-a6f6-58b17d0d25ea'
);
*/
