import React from "react";

function Pagination({ totalPages, currentPage, setCurrentPage }) {
    return (
        <div className="flex justify-center items-center mt-6 space-x-2">
            <button
                className="px-3 py-2 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
            >
                Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    className={`px-3 py-2 text-sm font-medium ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
                        } rounded hover:bg-blue-400`}
                    onClick={() => setCurrentPage(index + 1)}
                >
                    {index + 1}
                </button>
            ))}

            <button
                className="px-3 py-2 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
}
export default Pagination;
