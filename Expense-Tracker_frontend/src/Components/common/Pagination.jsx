export default function Pagination({
  page,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-8">

      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="px-4 py-2 rounded-lg border disabled:opacity-40 hover:bg-gray-100"
      >
        Previous
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`w-10 h-10 rounded-lg transition ${
            page === index + 1
              ? "bg-blue-600 text-white"
              : "border hover:bg-gray-100"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="px-4 py-2 rounded-lg border disabled:opacity-40 hover:bg-gray-100"
      >
        Next
      </button>

    </div>
  );
}