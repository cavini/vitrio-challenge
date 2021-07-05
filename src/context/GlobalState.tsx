import { PropsWithChildren, ReactNode, useReducer } from 'react';
import globalReducer from './globalReducer';
import GlobalContext from './globalContext';
import GetProductList from '../domain/command/GetProductList';

import { GET_PRODUCTS } from '../types';
import Product from '../domain/model/Product';

const GlobalState = (props: PropsWithChildren<ReactNode>) => {
  interface State {
    products: Array<Product>;
    loading: Boolean;
  }
  const initialState: State = {
    products: [],
    loading: true,
  };
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const getProducts = async () => {
    const data: Object = await new GetProductList().execute('products');

    dispatch({ type: GET_PRODUCTS, payload: data });
  };
  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        loading: state.loading,
        getProducts,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
