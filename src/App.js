
import './styles/App.css';
import ProductPage from './pages/product';
import Cart from './components/Cart';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
function App() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-semibold">E-Commerce Store</h1>
          <button
            onClick={() => setIsCartOpen(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 relative"
          >
            View Cart
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cartItems.length}
            </span>
          </button>

        </div>

        <ProductPage />


        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center border-b pb-2">
                <h2 className="text-xl font-semibold">Your Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-lg"
                >
                  ✕
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto">

                <Cart />
              </div>

              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 w-full"
              >
                Close
              </button>
            </div>
          </div>

        )}
      </div>
    </div>
  );
}

export default App;
