import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className="home__image" 
            src="https://assets.aboutamazon.com/dims4/default/0d2f10a/2147483647/strip/true/crop/1279x720+0+0/resize/2480x1396!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F1b%2F9a%2Fe4b841da45288aa3db3b40f28323%2Fseller-innovations.jpg"
            />
            <div className="home__row">
                {/*two columns*/}
                <Product
                id = "12321341"
                title="Why I Killed Gandhi -By Nathuram Godse"
                price={150}
                rating={5}
                image="https://m.media-amazon.com/images/I/71uVN0HSQTL._SY522_.jpg"
                />
                <Product
                id="23445930"
                title="VERO MODA Women Midi Dress"
                price={1610}
                rating={5}
                image="https://m.media-amazon.com/images/I/51yyvP82tJL._SY879_.jpg"
                />
            </div>
            <div className="home__row">
                {/*three columns*/}
                <Product
                id="43215665"
                title="Pride and Prejudice"
                price="124"
                rating={4}
                image="https://m.media-amazon.com/images/I/41crtWt37bL._SY445_SX342_QL70_FMwebp_.jpg"
                />
                <Product
                id="543678321"
                title="iPhone 16e 128 GB"
                price="51499"
                rating={4}
                image="https://m.media-amazon.com/images/I/61SKi94cImL._SX679_.jpg"
                />
                <Product
                id="564890765"
                title="Seseno Detergent, Soap Dispenser for Kitchen with Sponge Holder"
                price="199"
                rating={3}
                image="https://m.media-amazon.com/images/I/51l8nRp3FqL._SX679_.jpg"
                />
            </div>
            <div className="home__row">
                {/*one columns*/}
                <Product
                id="234516544"
                title="TRIUMPH Speed 400 MY25 Bike Phantom Black"
                price="233754"
                rating={5}
                image="https://m.media-amazon.com/images/I/71zKnIsrqML._SX679_.jpg"
                />
            
            </div>
        </div>
    </div>
  );
};

export default Home

