export default function TransactionFilters({
  search,
  setSearch,
  filterType,
  setFilterType,
  filterCategory,
  setFilterCategory,
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Search */}

        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Type */}

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        {/* Category */}

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>

          <option value="Food">Food</option>

          <option value="Travel">Travel</option>

          <option value="Shopping">Shopping</option>

          <option value="Entertainment">Entertainment</option>

          <option value="Salary">Salary</option>

          <option value="Others">Others</option>

        </select>

      </div>

    </div>
  );
}