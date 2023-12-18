
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return addItemToCart(state, action.payload);
    case 'REMOVE_ITEM':
      return removeItemFromCart(state, action.payload);
    case 'CLEAR_CART':
      return { items: [], userData: null };
      case 'SET_USER_DATA':
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};

const addItemToCart = (state, newItem) => {
  const existingItemIndex = state.items.findIndex((item) => item.id === newItem.id);

  if (existingItemIndex !== -1) {
    const updatedItems = [...state.items];
    updatedItems[existingItemIndex].quantity += newItem.quantity;

    return { ...state, items: updatedItems };
  } else {
    return { ...state, items: [...state.items, newItem] };
  }
};

const removeItemFromCart = (state, itemId) => {
  const updatedItems = state.items.filter((item) => item.id !== itemId);
  return { ...state, items: updatedItems };
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [],userData: null  });

  
  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const isInCart = (id) => {
    return cartState.items.some((item) => item.id === id);
  };

  const setUserData = (userData) => {
    dispatch({ type: 'SET_USER_DATA', payload: userData });
  };
  return (
    <CartContext.Provider value={{ cartState, addItem, removeItem, clearCart, isInCart, setUserData }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};