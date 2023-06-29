import { MainLayout } from "../../MainLayout/Layout";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { Input } from "../../Components/Atoms/Input/Input";
import { Button } from "../../Components/Atoms/Button/Button";
import Styles from  "./Products.module.css"


interface IProduct {
  name: string;
  description: string;
  price: string;
  imageURL: string;
}

export const Products = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [imageURL, setImageURL] = useState<string>('');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [description, setDescription] = useState<string>('');


  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);


  const handleDelete = (index: number) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts.splice(index, 1);
      return updatedProducts;
    });
  };

  const handleAddProduct = (event: React.FormEvent) => {
    event.preventDefault();

    const newProduct: IProduct = {
      name,
      description,
      price,
      imageURL,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);

    setName('');
    setPrice('');
    setImageURL('');
    setDescription('');
  };

  return (
    <MainLayout>
      <div>
        <h1>Product Page</h1>
        <h2>Create a New Product</h2>
        <form className={Styles.from} onSubmit={handleAddProduct}>
          <Input 
            type="text"
            id="name"
            placeholder="Product Name"
            value={name}
            onChange={(event) =>  setName(event.target.value)}
            required>
          </Input>

          <br />

          <Input
           min={0}
           max={10000}
           type="number"
           placeholder="Price"
           id="price"
           value={price}
           onChange={(event) => setPrice(event.target.value)}
           required>
          </Input>

          <br />
          
          <Input
           type="text"
            placeholder="Description"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value,)}
            required>   
          </Input>
          
          <br />
          
          <Input
           type="text"
           placeholder="URL"
           id="imageURL"
           value={imageURL}
           onChange={(event) => setImageURL(event.target.value)}
           required>
          </Input>
          <br />
          <Button name="Add Product" type="submit"></Button>
       
        </form >
        <ul>
          {products.map((product, index) => (
            <li className="product" key={index}>
              <img src={product.imageURL} alt={product.name} />
              <h3>{product.name}</h3>
              <h5>{product.description}</h5>
              <br />
              {product.price}$
              <br />
              <Button  name="Delete" onClick={() => handleDelete(index)}> </Button>
            </li>
          ))}
        </ul>
      </div>
      <Link to={"/"}>Back</Link>
    </MainLayout>
  );
};



