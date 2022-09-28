import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import axios from "axios";
import {Outlet} from "react-router-dom";
import {AppContext} from "./context";

function App() {
  const [isShowCart, setShowCart] = useState(false);

  function toggleShowCart() {
    setShowCart(!isShowCart);
  }

  const [isLoadingGoods, setLoadingGoods] = useState(true);

  const [goods, setGoods] = useState([]);
  useEffect(() => {
    async function getGoods() {
      const {data} = await axios.get('https://6331da9fcff0e7bf70f7e25f.mockapi.io/goods');
      return data;
    }

    try {
      setLoadingGoods(true);
      getGoods().then(res => {
        setGoods([...res]);
        setLoadingGoods(false);
      });
    } catch (e) {
      throw new Error(e.message());
    }
  }, []);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const goods = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems((prev) => [...prev, ...goods]);
  }, [])

  function deleteFromCart(good) {
    setCartItems([...cartItems.filter(goodInCart => goodInCart.id !== good.id)]);
  }

  function addToCart(good) {
    if (cartItems.map(item => item.id).includes(good.id)) {
      deleteFromCart(good);
      return;
    }
    setCartItems((prev) => [...prev, good]);
  }

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const totalPrice = cartItems.reduce((acc, cur) => acc + cur.price, 0);
    setTotalPrice(totalPrice);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const [favItems, setFavItems] = useState([]);

  useEffect(() => {
    const favoriteGoods = JSON.parse(localStorage.getItem('favorite')) || [];
    setFavItems(prev => [...prev, ...favoriteGoods]);
  }, []);

  function deleteFromFav(good) {
    setFavItems([...favItems.filter(goodInFav => goodInFav.id !== good.id)]);
  }

  function addToFav(good) {
    if (favItems.map(item => item.id).includes(good.id)) {
      deleteFromFav(good);
      return;
    }
    setFavItems((prev) => [...prev, good]);
  }

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favItems));
  }, [favItems]);


  return (
    <AppContext.Provider value={{
      toggleShowCart,
      goods,
      addToCart,
      addToFav,
      totalPrice,
      cartItems,
      deleteFromCart,
      favItems,
      deleteFromFav,
      setCartItems,
      isLoadingGoods,
    }}>
      {
        isShowCart &&
        <Cart/>
      }
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </AppContext.Provider>
  );
}

export default App;
