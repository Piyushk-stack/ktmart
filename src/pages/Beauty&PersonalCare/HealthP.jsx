import React, {UseState} from "react";
// Main


// cards image
import Oral_Care from '../Beauty&PersonalCare/Side/Oral_Care.webp';
import Hair_care from '../Beauty&PersonalCare/Side/Hair_care.webp';
import Skin_Care from '../Beauty&PersonalCare/Side/Skin_Care.webp';
import Sanitary_Napkins from '../Beauty&PersonalCare/Side/Sanitary_Napkins.webp';
import Baby_Care_1 from '../Beauty&PersonalCare/Side/Baby_Care_1.webp';
import Beauty_Products from '../Beauty&PersonalCare/Side/Beauty_Products.webp';
import Health___Wellness from '../Beauty&PersonalCare/Side/Health___Wellness.webp';
import Bath_Body_1x_1 from '../Beauty&PersonalCare/Side/Bath_Body_1x_1.webp';
// categories images in

// images in main
import dettal from '../Beauty&PersonalCare/Health/dettal.webp';
import dabar from '../Beauty&PersonalCare/Health/dabar.webp';
import vapo from '../Beauty&PersonalCare/Health/vapo.webp';
import hajmola from '../Beauty&PersonalCare/Health/hajmola.webp';

const HealthP = () => {
  const products = [
    {
      id: 1,
      name: "Dettol",
      image:  dettal,
      originalPrice: 162,
      discountedPrice: 155,
    //   discountPercent: 37,
    },
    {
      id: 2,
      name: "Dabar",
      image: dabar,
      originalPrice: 74,
      discountedPrice: 60,
    //   discountPercent: 50,
    },
    {
      id: 3,
      name: "Hajmola",
      image: hajmola,
      originalPrice: 81,
      discountedPrice: 75,
    //   discountPercent: 6,
    },
    {
      id: 4,
      name: "Viks VapoRub",
      image: vapo,
      originalPrice: 214,
      discountedPrice: 179,
    //   discountPercent: 50,
    },
     {
      id: 5,
      name: "Dettol",
      image:  dettal,
      originalPrice: 162,
      discountedPrice: 155,
    //   discountPercent: 37,
    },
    {
      id: 6,
      name: "Dabar",
      image: dabar,
      originalPrice: 74,
      discountedPrice: 60,
    //   discountPercent: 50,
    },
    {
      id: 7,
      name: "Hajmola",
      image: hajmola,
      originalPrice: 81,
      discountedPrice: 75,
    //   discountPercent: 6,
    },
    {
      id: 8,
      name: "Viks VapoRub",
      image: vapo,
      originalPrice: 214,
      discountedPrice: 179,
    //   discountPercent: 50,
    },
    // {
    //   id: 5,
    //   name: "OLAY",
    //   image: shopping5,
    //   originalPrice: 190,
    //   discountedPrice: 166,
    // //   discountPercent: 4,
    // },
    // {
    //   id: 6,
    //  name: "LOTUS",
    //   image: shopping6,
    //   originalPrice: 81,
    //   discountedPrice: 75,
    // //   discountPercent: 37,
    // },
    // {
    //   id: 7,
    //  name: "Mama Earth",
    //   image: shopping7,
    //   originalPrice: 74,
    //   discountedPrice: 60,
    // //   discountPercent: 50,
    // },
    // {
    //   id: 8,
    //  name: "POND'S",
    //   image: shopping8,
    //   originalPrice: 81,
    //   discountedPrice: 75,
    // //   discountPercent: 37,
    // },
    // {
    //   id: 9,
    //   name: "Colgate Herble Toothpaste",
    //   image: herbel,
    //   originalPrice: 150,
    //   discountedPrice: 99,
    // //   discountPercent: 50,
    // },
    // {
    //   id: 10,
    //   name: "Colgate Vedshakthi Toothpaste",
    //   image: vedshakti,
    //   originalPrice: 130,
    //   discountedPrice: 90,
    // //   discountPercent: 37,
    // },
    // {
    //   id: 11, 
    //   name: "Colgate Max Fresh Peppermint Toothpaste",
    //   image: maxfreshblue,
    //   originalPrice: 194,
    //   discountedPrice: 172,
    // //   discountPercent: 50,
    // },{
    //   id: 12,
    //   name: "Pepsodent Germi Check Toothpaste",
    //   image: pepsodent,
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
    { img: Oral_Care, label: "Oral Care" }, 
    { img: Hair_care, label: "Hair Care" },
    { img: Bath_Body_1x_1, label: "Bath & Body" },
    { img: Skin_Care, label: "Skin Care" },
    { img: Sanitary_Napkins, label: "Feminine Needs" },
    { img: Baby_Care_1, label: "Baby Care" },
    { img: Beauty_Products, label: "Beauty & Cosmatics" },
    { img: Health___Wellness, label: "Health & Pharma" },
    // { img: Sweets, label: "Sweets" },
    // { img: Bakery, label: "Bakery Items" },
    // { img: Pickles, label: "Pickles" },
  ];

  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-20 mt-38 py-6">
      {/* Page Title */}
      <h1 className="font-semibold text-xl sm:text-2xl mb-6">Beauty & Personal Care </h1>

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
            Baby Care
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

export default HealthP;
