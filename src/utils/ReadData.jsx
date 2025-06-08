import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "../store/slices/productsSlice";

export default function ReadData() {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);

    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products.length]);

    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Id</th>
                        <th>Png</th>
                        <th>Img1</th>
                        <th>Img2</th>
                        <th>Img3</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Mrp</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((value, key) => {
                            return <tr key={key}>
                                <td>{key}</td>
                                <td>{value.id}</td>
                                <td><img  loading="lazy" src={value.imgPng} alt="img" width="80px" /></td>
                                <td><img  loading="lazy" src={value.imgUrl1} alt="img" width="80px" /></td>
                                <td><img  loading="lazy" src={value.imgUrl2} alt="img" width="80px" /></td>
                                <td><img  loading="lazy" src={value.imgUrl3} alt="img" width="80px" /></td>
                                <td>{value.name}</td>
                                <td>{value.category}</td>
                                <td>{value.price}</td>
                                <td>{value.mrp}</td>
                                <td>{value.type}</td>
                                <td>{value.description}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}


// const [products, setProducts] = useState([]);

// const fetchProductData = async () => {
//     try {
//         const response = await axios.get(`${import.meta.env.VITE_DB_URL}/products.json`);
//         setProducts(Object.values(response.data));

//     } catch (error) {
//         console.log("Fetching: ", error);
//     }
// }

// useEffect(() => {
//     fetchProductData();
// }, []);
// console.log(products);