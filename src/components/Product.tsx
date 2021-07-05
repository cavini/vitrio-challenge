import React from 'react';

export default function Product({ data }: any) {
  console.log(data);
  return (
    <div className="product-card">
      <div className="main-content">
        {' '}
        <img className="product-image" src={data.image} alt="" />
        {data.productName !== '' ? (
          <>
            <h2 className="product-title">{data.productName}</h2>
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="secondary-content">
        {data.formattedPrice !== '' ? (
          <>
            <p className="price">{data.formattedPrice}</p>
          </>
        ) : (
          <></>
        )}
        {data.installment !== '' ? (
          <>
            <p className="installments">{data.installment}</p>
          </>
        ) : (
          <></>
        )}

        <div className="button-wrapper">
          <button className="purchase-button">
            {data.sobconsulta[0] === 'nao' ? 'COMPRAR' : 'CONSULTE'}
          </button>{' '}
        </div>
      </div>
    </div>
  );
}
