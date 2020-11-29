import React from 'react';
import Header from './components/header/header';
import CurrentCategory from './components/storefront/current-category';
import Categories from './components/storefront/categories';
import Products from './components/storefront/products';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header />
      <Categories />
      <CurrentCategory />
      <Products />
      <Footer />
    </>
  );
}

export default App;
