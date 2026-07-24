import { Search, RotateCcw } from "lucide-react";

export default function TransactionFilters({
  search,
  setSearch,
  filterType,
  setFilterType,
  filterCategory,
  setFilterCategory,
}) {
  const clearFilters = () => {
    setSearch("");
    setFilterType("");
    setFilterCategory("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Type */}

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        {/* Category */}

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>

          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Salary">Salary</option>
          <option value="Others">Others</option>
        </select>

        {/* Clear */}

        <button
          onClick={clearFilters}
          className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
        >
          <RotateCcw size={18} />
          Clear Filters
        </button>

      </div>

    </div>
  );
}