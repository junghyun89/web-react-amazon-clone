import React from 'react';
import './Home.css';
import Product from './Product';
import mainImg from './main.jpg';
import product1Img from './product1.jpg';
import product2Img from './product2.jpg';
import product3Img from './product3.jpg';
import product4Img from './product4.jpg';
import product5Img from './product5.jpg';
import product6Img from './product6.jpg';

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home_image" src={mainImg} alt="" />
        <div className="home_row">
          <Product id='2323' image={product1Img} title="제품 1" price={3000} rating={2} />
          <Product id='2325' image={product2Img} title="제품 2" price={5000} rating={3} />
        </div>
        <div className="home_row">
          <Product id='2327' image={product3Img} title="제품 3" price={4500} rating={5} />
          <Product id='2329' image={product4Img} title="제품 4" price={7000} rating={4} />
          <Product id='2321' image={product5Img} title="제품 5" price={8500} rating={3} />
        </div>
        <div className="home_row">
          <Product id='2322'
            image={product6Img}
            title="제품 6"
            price={13000}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
