import React, { useState, useEffect } from 'react';
import Product from './Product';

import productsData from './data';

const ProductList = () => {

   const [ products, setProducts ] = useState([]);

   useEffect(() => {

      setProducts(productsData);

   }, [])

   const handleProductUpVote = (productId) => {

      const nextProducts = products.map((p) => {

         if (p.id === productId) {

            return {
               ...p,
               votes: p.votes + 1
            };

         } else {

            return p;

         }
      });

      setProducts(nextProducts);

   }

   const productList = products.sort((a, b) => a.votes - b.votes);

   return (
      <div>
         {
            productList.map(p =>
               <Product
                  { ...p }
                  handleProductUpVote={ handleProductUpVote }
               />
            )
         }
      </div>
   );
}

ProductList.propTypes = {}

export default ProductList;