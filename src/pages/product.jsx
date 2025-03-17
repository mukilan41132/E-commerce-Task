import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slice/thunk";
import Pagination from "../components/Pagination";
import { addToCart } from "../slice/cartSlice";

function ProductPage() {

    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const [searchTerm, setSearchTerm] = useState("");

    const { ProductData, loading, errorMsg } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    console.log(ProductData);


    const totalPages = Math.ceil(ProductData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = ProductData.slice(startIndex, endIndex);

    const filteredProducts = currentProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="p-6 sm:p-8 md:p-10 lg:p-12 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Product Page</h1>
            <input
                type="text"
                placeholder="Search products..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
                            <img src={product.image} alt={product.title} className="w-full h-50 object-contain rounded-md mb-4" />
                            <h2 className="text-lg font-medium text-gray-800">{product.title}</h2>
                            <p className="text-sm text-gray-500">{product.description.substring(0, 50)}...</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-lg font-semibold text-blue-600">${product.price}</span>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                 onClick={() => dispatch(addToCart(product))}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center col-span-full">No products found</p>
                )}

            </div>

            <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
}

export default ProductPage;
