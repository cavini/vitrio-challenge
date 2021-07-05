/* eslint-disable import/no-anonymous-default-export */
import { GET_PRODUCTS } from '../types';

export default (state: any, action: any) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    default:
      return state;
  }
};
