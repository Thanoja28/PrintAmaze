import React from 'react';
import Header from './components/Header/Header';
import { productData, productDataTwo } from './components/Products/data';
import Products from './components/Products/Products';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import Team from './components/Team/Team';

function Home() {
    return (
      <React.Fragment>
        <Header/>
        <Products heading='Choose your Favorite' data={productData} />
        <Products heading='Choose your Design' data={productDataTwo} />
        <Team />
        <Carousel />
        <Feature />
        <Footer />
    </React.Fragment> 
    )
}

export default Home;
