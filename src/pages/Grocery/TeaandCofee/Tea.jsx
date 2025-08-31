import React, { useState } from "react";

// Category images
import rice from '../../img/Grocery/rice.jpeg';
import cookingoil from '../../img/Grocery/cookingoil.jpeg';
import ghee12 from '../../img/Grocery/ghee12.jpeg';
import flour from '../../img/Grocery/flour.jpeg';
import spices from '../../img/Grocery/spices.jpeg';
import pulses from '../../img/Grocery/pulses.jpeg';
import dry from '../../img/Grocery/dry.jpeg';
import organo from '../../img/Grocery/organo.jpg';
import salt from '../../img/Grocery/salt.jpeg';

import tea1 from '../../../pages/Grocery/TeaandCofee/tea1.png'
import tea2 from '../../../pages/Grocery/TeaandCofee/tea2.png'
import tea3 from '../../../pages/Grocery/TeaandCofee/tea3.jpg'
import tea4 from '../../../pages/Grocery/TeaandCofee/tea4.jpg'
import tea5 from '../../../pages/Grocery/TeaandCofee/tea5.jpg'
import tea6 from '../../../pages/Grocery/TeaandCofee/tea6.jpg'
import tea7 from '../../../pages/Grocery/TeaandCofee/tea7.jpg'
import tea8 from '../../../pages/Grocery/TeaandCofee/tea8.jpg'
// import dry9 from '../../../pages/Grocery/dryfruits/dry9.webp'
// import dry10 from '../../../pages/Grocery//dryfruits/dry10.webp'
// import dry11 from '../../../pages/Grocery//dryfruits/dry11.webp'
// import dry12 from '../../../pages/Grocery//dryfruits/dry12.webp'
// import mas13 from '../../../pages/Grocery//masala/mas13.webp'
// import mas14 from '../../../pages/Grocery//masala/mas14.webp'
// import mas15 from '../../../pages/Grocery//masala/mas15.webp'
// import mas16 from '../../../pages/Grocery//masala/mas16.webp'
// import oil17 from '../../../pages/Grocery/kcookingoil/oil17.webp';
// import oil18 from '../../../pages/Grocery/kcookingoil/oil18.webp';
// import oil19 from '../../../pages/Grocery/kcookingoil/oil19.webp';
// import oil20 from '../../../pages/Grocery/kcookingoil/oil20.webp';
// import oil21 from '../../../pages/Grocery/kcookingoil/oil21.webp';
// import oil22 from '../../../pages/Grocery/kcookingoil/oil22.webp';
// import oil23 from '../../../pages/Grocery/kcookingoil/oil23.webp';
// import oil24 from '../../../pages/Grocery/kcookingoil/oil24.webp';

const Tea = () => {
     const quantityOptions = ["1 Kg", "2 Kg", "5 Kg", "10 Kg"];
     const [selectedQuantities, setSelectedQuantities] = useState({});

     const handleQuantityChange = (productId, value) => {
          setSelectedQuantities((prev) => ({ ...prev, [productId]: value }));
     };

     const products = [
          { id: 1, name: "Continental Instant Coffee +Vanilla Flavour", image: tea1, originalPrice: 139, discountedPrice: 88, discountPercent: 37 },
          { id: 2, name: "Continental Instant Coffee +Hazelnut Flavour", image: tea2, originalPrice: 179, discountedPrice: 89.5, discountPercent: 50 },
          { id: 3, name: "Bru Instant Coffee Pouch", image: tea3, originalPrice: 118, discountedPrice: 110.8, discountPercent: 6 },
          { id: 4, name: "AVT Natures Cup Ayurvedic Tea", image: tea4, originalPrice: 125, discountedPrice: 112, discountPercent: 50 },
          { id: 5, name: "Nescafe Sunrise Premium Pouch", image: tea5, originalPrice: 145, discountedPrice: 139, discountPercent: 4 },
          { id: 6, name: "Continental Xtra Coffee", image: tea6, originalPrice: 151, discountedPrice: 145, discountPercent: 4 },
          { id: 7, name: "Brooke Bond Taj Mahal Tea", image: tea7, originalPrice: 157, discountedPrice: 150.7, discountPercent: 4 },
          { id: 8, name: "Brooke Bond Red Label Tea", image: tea8, originalPrice: 166, discountedPrice: 156.48, discountPercent: 6 },
          // { id: 9, name: "Walnut With Shell", image: dry9, originalPrice: 175, discountedPrice: 168, discountPercent: 4 },
          // { id: 10, name: "Cream & Onion Makhana – Healthy Roasted Fox Nuts Snack", image: dry10, originalPrice: 212, discountedPrice: 195.55, discountPercent: 8 },
          // { id: 11, name: "Breakfast Punch with Seeds & Nuts", image: dry11, originalPrice: 252, discountedPrice: 209.1, discountPercent: 17 },
          // { id: 12, name: "Masti Masala Makhana – Spicy & Healthy Roasted Fox Nuts", image: dry12, originalPrice: 900, discountedPrice: 680, discountPercent: 24 },
          // { id: 13, name: "Spar Select Cooking Soda 100G", image: mas13, originalPrice: 1340, discountedPrice: 1055, discountPercent: 21 },
          // { id: 14, name: "Spar Select Pepper Black Whole 50G", image: mas14, originalPrice: 125, discountedPrice: 112, discountPercent: 10 },
          // { id: 15, name: "SPAR Select Pepper Black Whole", image: mas15, originalPrice: 1650, discountedPrice: 1475, discountPercent: 11 },
          // { id: 16, name: "Spar Select Chilli Guntur With Stem", image: mas16, originalPrice: 1800, discountedPrice: 1635, discountPercent: 9 },
     ];

     const categories = [
          { img: rice, label: "Rice & Rice Products" },
          { img: cookingoil, label: "Cooking Oil" },
          { img: ghee12, label: "Ghee & Vanaspati" },
          { img: flour, label: "Flours" },
          { img: spices, label: "Masala & Spices" },
          { img: salt, label: "Salt/Sugar/Jaggery" },
          { img: pulses, label: "Dal" },
          { img: dry, label: "Dry Fruits" },
          { img: organo, label: "Organic Foods" },
     ];

     return (
          <div className="px-2 sm:px-4 md:px-8 lg:px-20 mt-40 py-6">
               {/* Page Title */}
               <h1 className="font-bold text-xl sm:text-2xl mb-6">Grocery</h1>

               <div className="flex flex-col lg:flex-row gap-6">
                    {/* Sidebar / Mobile Categories */}
                    <div className="lg:w-64">
                         {/* Mobile & Tablet: Grid layout */}
                         <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:hidden">
                              {categories.map((cat, index) => (
                                   <div
                                        key={index}
                                        className="flex flex-col items-center text-center bg-white border rounded-xl p-3"
                                   >
                                        <img
                                             src={cat.img}
                                             className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover border"
                                             alt={cat.label}
                                        />
                                        <span className="text-[11px] sm:text-sm font-medium mt-1">{cat.label}</span>
                                   </div>
                              ))}
                         </div>

                         {/* Desktop: Vertical sidebar */}
                         <div className="hidden lg:block border border-gray-300 p-4 sm:p-5 rounded-2xl bg-white">
                              <ul className="space-y-3 sm:space-y-4">
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
                                             <span className="text-sm sm:text-base font-medium">{cat.label}</span>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                         {/* Banner */}
                         <span className="font-bold text-lg sm:text-2xl">Tea & Coffee</span>

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
                                                  <h2 className="text-xs sm:text-sm font-semibold truncate">{product.name}</h2>
                                                  <p className="text-gray-500 text-[11px] sm:text-xs">{product.weight}</p>

                                                  {/* Price */}
                                                  <div className="mt-1 sm:mt-2">
                                                       <span className="text-gray-500 line-through text-xs sm:text-sm mr-1 sm:mr-2">
                                                            ₹{product.originalPrice}
                                                       </span>
                                                       <span className="text-red-500 font-semibold text-xs sm:text-sm">
                                                            ₹{product.discountedPrice}
                                                       </span>
                                                  </div>

                                                  {/* Quantity */}
                                                  <select
                                                       value={selectedQuantities[product.id] || quantityOptions[0]}
                                                       onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                                                       className="mt-2 sm:mt-3 border border-gray-300 rounded px-1 sm:px-2 py-0.5 sm:py-1 text-xs sm:text-sm w-full"
                                                  >
                                                       {quantityOptions.map((qty, idx) => (
                                                            <option key={idx} value={qty}>{qty}</option>
                                                       ))}
                                                  </select>

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

export default Tea;
