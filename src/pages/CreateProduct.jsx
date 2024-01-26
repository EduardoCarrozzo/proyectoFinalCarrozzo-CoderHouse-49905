import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useState } from 'react'

export const CreateProduct = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [thumbnail, setThumbnail] = useState("");
    const [category, setCategory] = useState("");

    const handleCreateProduct = () => {
        const data = {
            title,
            description,
            price,
            thumbnail,
            category
        }

        const db = getFirestore();

        const productsCollection = collection(db, 'products');

        addDoc(productsCollection, data).then(({ id }) => {
            console.log(id);
        })
    }

    return (
        <div>
            <h1>Crear producto</h1>
            <input type="text" placeholder='Titulo' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder='Descripción' value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="number" placeholder='Precio' value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder='Imagen' value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
            <input type="text" placeholder='Categoria' value={category} onChange={(e) => setCategory(e.target.value)} />
            <button style={{ fontFamily: 'Arial', color: 'red' }} onClick={handleCreateProduct}>Crear producto</button>
        </div>
    )
}
