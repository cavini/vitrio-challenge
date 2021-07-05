import React, { useEffect, useContext } from 'react';
import Product from './Product';
import globalContext from '../context/globalContext';
import Loading from './Loading';

export default function ProductList() {
  const GlobalContext = useContext(globalContext);

  const { getProducts, products, loading }: any = GlobalContext;
  console.log(products, loading);

  useEffect(() => {
    getProducts();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="product-list">
      {products.length > 0 ? (
        <>
          {products.map((product: any): any => {
            return <Product data={product} />;
          })}
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </div>
  );
}
