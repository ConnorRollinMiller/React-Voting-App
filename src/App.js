import React from 'react';
import ProductList from './ProductList';

const App = () => (
   <div className="p-4">
      <main className="container">
         <h1 className="text-center">Popular Products</h1>
         <hr />
         <ProductList />
      </main>
   </div>
);

export default App;
