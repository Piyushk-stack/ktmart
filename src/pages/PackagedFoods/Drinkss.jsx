import React, {UseState} from "react";
// Main
import Biscuits_Cookies from '../../pages/PackagedFoods/Biscuits/Biscuits_Cookies.webp';

// cards image
import Breakfastmain from "../../pages/PackagedFoods/BreakFast/Breakfastmain.webp";
import Chocolatesmain from "../../pages/PackagedFoods/Chocolates/Chocolatesmain.webp";
import Ketchupmain from "../../pages/PackagedFoods/Ketchups/Ketchupmain.webp";
import Pastamain from "../../pages/PackagedFoods/Pasta&Noodles/Pastamain.webp";
import Jamsmain from "../../pages/PackagedFoods/Jams/Jamsmain.webp";
import Instantmain from "../../pages/PackagedFoods/InstantFood/Instantmain.webp";
import Snacksmain from "../../pages/PackagedFoods/Snacks/Snacksmain.webp";
import Sweets from "../../pages/PackagedFoods/Sweets/Sweets.webp";
import Bakery from "../../pages/PackagedFoods/Bakery/Bakery.webp";
import Pickles from "../../pages/PackagedFoods/Pickles/Pickles.webp";

// images in main
import appy from '../PackagedFoods/Drinks/appy.webp';
import cokacola from '../PackagedFoods/Drinks/cokacola.webp';
import fanta from '../PackagedFoods/Drinks/fanta.webp';
import frooti from '../PackagedFoods/Drinks/frooti.webp';
import mirinda from '../PackagedFoods/Drinks/mirinda.webp';
import real from '../PackagedFoods/Drinks/real.webp';
import redbull from '../PackagedFoods/Drinks/redbull.webp';
import thub from '../PackagedFoods/Drinks/thub.webp';



const Snackss = () => {
  const products = [
    {
      id: 1,
      name: "COCA-COLA SOFT DRINK",
      image:  cokacola,
      originalPrice: 100,
      discountedPrice: 90,
    //   discountPercent: 37,
    },
    {
      id: 2,
      name: "FANTA ORANGE SOFT",
      image: fanta,
      originalPrice: 100,
      discountedPrice: 85,
    //   discountPercent: 50,
    },
    {
      id: 3,
      name: "MIERINDA ORANGE SOFT DRINK",
      image: mirinda,
      originalPrice: 38,
      discountedPrice: 35,
    //   discountPercent: 6,
    },
    {
      id: 4,
      name: "THUMBS UP SOFT DRINK",
      image: thub,
      originalPrice: 40,
      discountedPrice: 38,
    //   discountPercent: 50,
    },
    {
      id: 5,
      name: "Red Bull Energy Drink",
      image: redbull,
      originalPrice: 130,
      discountedPrice: 125,
    //   discountPercent: 4,
    },
    {
      id: 6,
      name: "Frooti Mango Drink",
      image: frooti,
      originalPrice: 45,
      discountedPrice: 40,
    //   discountPercent: 37,
    },
    {
      id: 7,
      name: "Real mixed fruit juice",
      image: real,
      originalPrice: 20,
      discountedPrice: 17,
    //   discountPercent: 50,
    },
    {
      id: 8,
      name: "Appy Fizz Apple Drink",
      image: appy,
      originalPrice: 42,
      discountedPrice: 40,
    //   discountPercent: 37,
    },
    // {
    //   id: 9,
    //   name: "BINGO ORIGINAL STYLE CHILLI SPNKLD 90G",
    //   image: bingo,
    //   originalPrice: 50,
    //   discountedPrice: 33.5,
    // //   discountPercent: 50,
    // },
    // {
    //   id: 10,
    //   name: "Kaleva Bikaneri Bhujia750G",
    //   image: bujiya,
    //   originalPrice: 360,
    //   discountedPrice: 180,
    // //   discountPercent: 37,
    // },
    // {
    //   id: 11, 
    //   name: "KURKURE GREEN CHUTNEY RAJASTANI STL 36G",
    //   image: kurkuregreen,
    //   originalPrice: 10,
    //   discountedPrice: 10,
    // //   discountPercent: 50,
    // },{
    //   id: 12,
    //   name: "PRINGLES POTATO CRISPS SOUR CREAM AND ONION 141G",
    //   image: pringles,
    //   originalPrice:190,
    //   discountedPrice: 142.5,
    // //   discountPercent: 37,
    // },
    // {
    //   id: 13,
    //   name: "TOO YUMM AMERICAN STYLE CREAM N ONION CHIPS 84G",
    //   image: greentoo,
    //   originalPrice: 70,
    //   discountedPrice: 35,
    // //   discountPercent: 50,
    // },
    // {
    //   id: 14,
    //   name: "TOO YUMM VEGGIE STIX SOUR CREAM N ONION 65G PLUS 10G FREE",
    //   image: tooyumvegi,
    //   originalPrice: 40,
    //   discountedPrice: 30,
    // //   discountPercent: 37,
    // },
    // {
    //   id: 15,
    //   name: "TOO YUMM INDIAN MASALA CHIPS 92G",
    //   image: tooyumblue,
    //   originalPrice: 40,
    //   discountedPrice: 30,
    // //   discountPercent: 50,
    // },
    // {
    //   id: 16,
    //   name: "DORITOS NACHO SWEET CHILLI 153G",
    //   image: doritos,
    //   originalPrice: 95,
    //   discountedPrice: 90,
    // //   discountPercent: 37,
    // },
    // {
    //   id: 18,
    //   name: "SAVORIT VERMICELLI LONG CUT 500G",
    //   image: seviya,
    //   originalPrice: 60,
    //   discountedPrice: 57,
    // //   discountPercent: 50,
    // },
    // {
    //   id: 19,
    //   name: "Unibic",
    //   image: unibic,
    //   originalPrice: 139,
    //   discountedPrice: 88,
    //   discountPercent: 37,
    // },
    // {
    //   id: 20,
    //   name: "BRITANNIA 2020",
    //   image: twtw,
    //   originalPrice: 179,
    //   discountedPrice: 89.5,
    //   discountPercent: 50,
    // },
    // {
    //   id: 21,
    //   name: "BourBon",
    //   image: bourbon,
    //   originalPrice: 139,
    //   discountedPrice: 88,
    //   discountPercent: 37,
    // },
  ];

  const categories = [
    { img: Biscuits_Cookies, label: "Biscuits & Cookies" }, 
    { img: Breakfastmain, label: "BreakFast & Cereals" },
    { img: Chocolatesmain, label: "Chocolates & Candies" },
    { img: Ketchupmain, label: "Ketchup & Sauces" },
    { img: Pastamain, label: "Pasta & Noodles" },
    { img: Jamsmain, label: "Jams & Spreads" },
    { img: Instantmain, label: "Instant Food" },
    { img: Snacksmain, label: "Snacks & Farsans" },
    { img: Sweets, label: "Sweets" },
    { img: Bakery, label: "Bakery Items" },
    { img: Pickles, label: "Pickles" },
  ];

  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-20 mt-38 py-6">
      {/* Page Title */}
      <h1 className="font-semibold text-xl sm:text-2xl mb-6">Packaged Foods</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Categories */}
        <div className="border border-gray-300 p-4 sm:p-9 rounded-2xl lg:w-64 bg-white">
          {/* Mobile: Grid with image on top */}
          <ul className="grid grid-cols-3 gap-4 sm:hidden">
            {categories.map((cat, index) => (
              <li
                key={index}
                className="flex flex-col items-center text-center hover:bg-gray-100 p-2 rounded-lg transition"
              >
                <img
                  src={cat.img}
                  className="h-12 w-12 rounded-full object-cover border"
                  alt={cat.label}
                />
                <span className="text-xs font-medium mt-1">{cat.label}</span>
              </li>
            ))}
          </ul>

          {/* Desktop: Vertical list */}
          <ul className="hidden sm:block space-y-3 sm:space-y-4">
            {categories.map((cat, index) => (
              <li
                key={index}
                className="flex items-center gap-2 sm:gap-3 hover:bg-gray-100 p-2 rounded-lg transition"
              >
                <img
                  src={cat.img}
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover border"
                  alt={cat.label}
                />
                <span className="text-sm sm:text-base font-medium">
                  {cat.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Banner */}
          <span className="font-bold text-lg sm:text-2xl">
            Pasta & Noodles
          </span>

          {/* Product Grid */}
          <div className="p-4 sm:p-6 border border-gray-400 bg-gray-50 mt-4 sm:mt-6 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition relative p-3 flex flex-col"
                >
                  {/* Discount Badge */}
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                    {product.discountPercent}% OFF
                  </span>

                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-36 sm:h-40 object-contain p-2 sm:p-4"
                  />

                  {/* Details */}
                  <div className="px-2 sm:px-4 pb-3 sm:pb-4 text-center flex flex-col flex-1">
                    <h2 className="text-xs sm:text-sm font-semibold truncate">
                      {product.name}
                    </h2>

                    {/* Price */}
                    <div className="mt-1 sm:mt-2">
                      <span className="text-gray-500 line-through text-xs sm:text-sm mr-1 sm:mr-2">
                        ₹{product.originalPrice}
                      </span>
                      <span className="text-red-500 font-semibold text-xs sm:text-sm">
                        ₹{product.discountedPrice}
                      </span>
                    </div>

                    {/* Add to Cart */}
                    <button className="mt-2 sm:mt-3 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-medium py-1.5 sm:py-2 px-3 sm:px-4 rounded w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snackss;
