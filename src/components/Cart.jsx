import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../slice/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {cartItems.map((product) => (
            <li key={product.id} className="p-4 flex items-center justify-between">
              <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded-md" />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-medium">{product.title}</h2>
                <p className="text-gray-500">${product.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => dispatch(decreaseQuantity(product.id))}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{product.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(product.id))}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(product.id))}
                  className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
