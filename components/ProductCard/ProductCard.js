import React from "react";

import Image from 'next/image';

import {productCard, price, name, description} from "./styles.module.scss";

function ProductCard({ children, product, ...props }) {
  
  const {productName, productPrice, productDescription, imageURL, uid} =  {...product}
  
  return (
    <aside className={productCard}>
      <header>
        <Image
          src={imageURL}
          alt={productName}
          width={200}
          height={240}
          quality={50}     
        />
      </header>
        <h2 className={name}>{productName}</h2>
        <p className={price}>${productPrice}</p>
        <p className={description}>{productDescription}</p>
      <footer>
        <form action="/api/checkout" method="POST">
          <input type="hidden" name="uid" value={uid}/>
          <button type="submit">Buy Now</button>
        </form>
      </footer>
    </aside>
  );
}

export default ProductCard;
