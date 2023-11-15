import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Shop = () => {
  return (
    <div>
        <Hero/>
        <div style={{marginTop: '200px'}}>
          <Popular/>
        </div>
        <div style={{marginTop: '400px'}}>
          <Offers/>
        </div>
        <div style={{marginTop: '600px'}}>
          <NewCollections/>
        </div>
        <div style={{marginTop: '800px'}}>
          <NewsLetter/>
        </div>
    </div>
  );
}

export default Shop