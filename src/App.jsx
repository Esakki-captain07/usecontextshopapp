import React from 'react';
import NavBar from './componends/NavBar';
import { CartProvider } from './CartContext';
import CardData from './componends/CardData';
//imgae import
import iphoneX from './assets/img/download.jpeg'
import iPhone1 from './assets/img/iPhone9.jpg';
import samsung9 from './assets/img/samsung9.jpeg';
import oppo from './assets/img/OPPOF19.jpeg';
import Huawei from './assets/img/HuaweiP30.jpeg';





let data = [
  {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": iPhone1,
    "subtotal" : 549
  },
  {
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": iphoneX
  },
  {
    "id": 3,
    "title": "Samsung Universe 9",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 1249,
    "discountPercentage": 15.46,
    "rating": 4.09,
    "stock": 36,
    "brand": "Samsung",
    "category": "smartphones",
    "thumbnail": samsung9
  },
  {
    "id": 4,
    "title": "OPPOF19",
    "description": "OPPO F19 is officially announced on April 2021.",
    "price": 280,
    "discountPercentage": 17.91,
    "rating": 4.3,
    "stock": 123,
    "brand": "OPPO",
    "category": "smartphones",
    "thumbnail": oppo
  },
  {
    "id": 5,
    "title": "Huawei P30",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 499,
    "discountPercentage": 10.58,
    "rating": 4.09,
    "stock": 32,
    "brand": "Huawei",
    "category": "smartphones",
    "thumbnail": Huawei

  }
];

function App() {
  return (
    <CartProvider>
      <NavBar />
      <div className='card-wrapper'>
        {data.map((e, i) => (
          <CardData data={e} key={i} />
        ))}
      </div>
    </CartProvider>
  );
}

export default App;
