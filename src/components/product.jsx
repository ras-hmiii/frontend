import React from "react";


const products = [
  {
    id: 1,
    name: "Loro Piana",
    description: "Blend Silk and Linen-Blend Polo Shirt",
    price: "$45",
    image: "../src/assets/shoes.jpg", 
  },
  {
    id: 2,
    name: "White Pants",
    description: "Comfortable cotton pants",
    price: "$50",
    image: "../src/assets/pants.jpg",
  },
  {
    id: 3,
    name: "Bidha Glasses",
    description: "Classic glasses with luxury finishing",
    price: "$50",
    image: "../src/assets/glass.jpeg",
  },
  {
    id: 4,
    name: "Brown Bomber",
    description: "Stylish winter bomber jacket",
    price: "$92",
    image: "../src/assets/pants.jpg",
  },
  {
    id: 5,
    name: "Leather Shoes Jack",
    description: "Elegant leather shoes",
    price: "$69",
    image: "/../src/assets/shoes.jpg",
  },
  {
    id: 6,
    name: "Grey T-Shirt",
    description: "Unique grey t-shirt",
    price: "$21",
    image: "../src/assets/glass.jpeg",
  },
];

function ProductGrid() {
  return (
    <div>
     

      {/* Product Grid Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">NEW COLLECTION</h2>
        <p className="text-center text-gray-600 mb-10">
          Our latest collection, where classic and contemporary styles converge in perfect harmony.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-sm bg-white"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="text-gray-800 font-bold">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
       {/* Wear to Wedding Section */}
      <section className="py-12 px-6">
        <div className="rounded-lg overflow-hidden shadow-sm">
          <img
            src="../src/assets/wedding.jpg"
            alt="Wedding Collection"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="text-center mt-6">
            <h2 className="text-3xl font-bold mb-4">WEAR TO WEDDING</h2>
            <p className="text-gray-600 mb-6">
              A symphony of exquisite designs tailored for your unforgettable moments.
            </p>
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              See Details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductGrid;
