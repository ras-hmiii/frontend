import React from "react";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Newsletter Section */}
        <div>
          <h1 className="text-3xl font-bold">TULOS</h1>
          <p className="text-gray-600 mt-4">
            Get newsletter updates for upcoming products and best discounts for all items.
          </p>
          <form className="mt-4 flex items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white font-semibold rounded-r-lg hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Tshirt</li>
            <li>Jacket</li>
            <li>Shoes</li>
            <li>Pants</li>
            <li>Sunglasses</li>
            <li>Tuxedo</li>
          </ul>
        </div>

        {/* Categories Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Man</li>
            <li>Woman</li>
            <li>Kids</li>
            <li>Gift</li>
            <li>New Arrival</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Social Media</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Youtube</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black text-white py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between text-sm">
          <p>© 2023 Tulos Production</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
