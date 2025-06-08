import { useState } from 'react';
import { MainBtn } from '../components';
import { saveProductData } from './setData';

export default function AddProducts() {
    const [productId, setProductid] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [mrp, setMrp] = useState(0);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [imgPng, setImgpng] = useState("");
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [img3, setImg3] = useState("");

    const formHandler = (e) => {
        e.preventDefault();

        if (!productId || !name || !price || !mrp || !category || !description || !imgPng || !img1 || !img2 || !img3) {
            alert("Fill all fields.");
        } else {
            saveProductData(
                productId,
                name,
                price,
                mrp,
                category,
                description,
                imgPng,
                img1,
                img2,
                img3,
            );
        }
    }
    // console.log(productId, "|", name, "|", price, "|", mrp, "|", category, "|", description, "|", imgPng, "|", img1, "|", img2, "|", img3);

    {/* productId, name, price, mrp, category, description, imgPng, img1, img2, img3 */ }
    return (
        <div className="uploadProduct" >
            <div>
                <h2>Add Products</h2>
                <form onSubmit={formHandler}>
                    <div>
                        <input onBlur={(e) => setProductid(e.target.value)} type="text" name="productId" placeholder="ProductId" />
                    </div>
                    <div>
                        <input onBlur={(e) => setName(e.target.value)} type="text" name="name" placeholder="Name" />
                    </div>
                    <div>
                        <input onBlur={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" />
                    </div>
                    <div>
                        <input onBlur={(e) => setPrice(e.target.value)} type="number" name="price" placeholder="Price" />
                    </div>
                    <div>
                        <input onBlur={(e) => setMrp(e.target.value)} type="number" name="mrp" placeholder="Mrp" />
                    </div>
                    <div>
                        <input onBlur={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" />
                    </div>
                    <div>
                        <input onBlur={(e) => setImgpng(e.target.value)} type="text" name="imgPng" placeholder="Png" />
                    </div>
                    <div>
                        <input onBlur={(e) => setImg1(e.target.value)} type="text" name="img1" placeholder="Img1" />
                    </div>
                    <div>
                        <input onBlur={(e) => setImg2(e.target.value)} type="text" name="img2" placeholder="Img2" />
                    </div>
                    <div>
                        <input onBlur={(e) => setImg3(e.target.value)} type="text" name="img3" placeholder="Img3" />
                    </div>
                    <div>
                        <MainBtn info={{ name: "Submit" }} />
                    </div>
                </form>
            </div>
        </div>
    )
}
